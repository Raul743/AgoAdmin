import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="scrollbar-inner">
        <div className="sidenav-header d-flex align-items-center">
          <Link className="navbar-brand" to="/">
            <img
              src="./assets/img/logo.png"
              className="navbar-brand-img"
              alt="..."
            />
          </Link>
          <div className="ml-auto">
            <div
              className="sidenav-toggler d-none d-xl-block"
              data-action="sidenav-unpin"
              data-target="#sidenav-main"
            >
              <div className="sidenav-toggler-inner">
                <i className="sidenav-toggler-line"></i>
                <i className="sidenav-toggler-line"></i>
                <i className="sidenav-toggler-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-inner">
          <div className="collapse navbar-collapse" id="sidenav-collapse-main">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <i className="fas fa-tachometer-alt text-primary"></i>
                  <span className="nav-link-text">Dashboard</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  <i className="fa fa-user text-primary"></i>
                  <span className="nav-link-text">Utilizadores</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/papeis">
                  <i class="fas fa-tasks text-primary"></i>
                  <span className="nav-link-text">Papeis</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/profissoes">
                  <i class="fas fa-user-tie text-primary"></i>
                  <span className="nav-link-text">Profissões</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/localizacao">
                  <i className="fa fa-location-arrow text-primary"></i>
                  <span className="nav-link-text">Localização</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
