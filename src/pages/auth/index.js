import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Auth() {
  document.getElementsByTagName("body")[0].className =
    "bg-default g-sidenav-show g-sidenav-pinned";

  return (
    <>
      <nav
        id="navbar-main"
        className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light"
      >
        <div className="container">
          <Link to="/entrar" className="navbar-brand">
            <img src="../../assets/img/logo.png" />
          </Link>
        </div>
      </nav>

      <Outlet />
      
      <footer className="py-5" id="footer-main">
        <div className="container">
          <div className="row align-items-center justify-content-xl-between">
            <div className="col-xl-6">
              <div className="copyright text-center text-xl-left text-muted">
                &copy; 2021{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="font-weight-bold ml-1"
                  target="_blank"
                >
                  AngoSalo
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <ul className="nav nav-footer justify-content-center justify-content-xl-end">
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link"
                    target="_blank"
                  >
                    AngoSalo
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="nav-link"
                    target="_blank"
                  >
                    Sobre nós
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="http://blog.creative-tim.com"
                    className="nav-link"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    className="nav-link"
                    target="_blank"
                  >
                    Licença
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
