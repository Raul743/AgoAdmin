/**
 * Modules
 */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Constants
 */
import Constants from "../../general/constants";

/**
 * Authentication
 */
import { useAuth } from "../../auth";

export default function Navbar() {
  const [user, setUser] = useState({});

  let navigate = useNavigate();

  const { getUser } = useAuth();

  useEffect(() => {
    setUser(getUser());
  }, [getUser]);
  // console.log(user, "raul");
  let logout = () => {
    // Removing the usee token
    localStorage.removeItem(Constants.USER_TOKEN);
    localStorage.removeItem(Constants.USER_DATA);

    // Navigate to the login page
    navigate("/entrar");
  };

  return (
    <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center ml-md-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link pr-0"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="media align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="Image placeholder"
                      src="../../assets/img/theme/team-4.jpg"
                    />
                  </span>
                  <div className="media-body ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm  font-weight-bold">
                      {user.nome}
                    </span>
                  </div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Bem-Vindo!</h6>
                </div>
                <Link to="/perfil" className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <span>Perfil</span>
                </Link>
                <div className="dropdown-divider"></div>
                <a
                  link="#"
                  href="#"
                  className="dropdown-item"
                  onClick={() => logout()}
                >
                  <i className="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
