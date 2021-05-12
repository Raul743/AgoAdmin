import React from "react";

export default function Footer() {
  return (
    <footer className="footer pt-0">
      <div className="row align-items-center justify-content-lg-between">
        <div className="col-lg-6">
          <div className="copyright text-center text-lg-left text-muted">
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
        <div className="col-lg-6">
          <ul className="nav nav-footer justify-content-center justify-content-lg-end">
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
    </footer>
  );
}
