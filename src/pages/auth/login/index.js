/**
 * Modules
 */
import React, { useState, useRef } from "react";
import { Form } from "@unform/web";
import { Link } from "react-router-dom";

/**
 * Contexts
 */
import { useAuth } from "../../../auth";

/**
 * Components
 */
import Input from "../../../components/fields/Input";
import ButtonLoading from "../../../components/ButtonLoading/";

export default function Login() {
  // useState to save 'remember me'
  const [remember, setRemember] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Use Ref
  const formRef = useRef(null);

  const { signIn } = useAuth();

  // Login
  let login = async (data) => {
    setButtonLoading(true);

    await signIn(data, formRef);

    setButtonLoading(false);
  };

  return (
    <div className="main-content">
      <div className="header bg-gradient-primary pt-7 pb-5 pt-lg-8 pt-lg-9">
        <div className="container">
          <div className="header-body text-center mb-7">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 className="text-white">Seja Bem-Vindo!</h1>
                <p className="text-lead text-white">
                  Inicie sessão para continuares a desfrutar dos nossos
                  serviços.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              className="fill-default"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <div className="container mt--8 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card bg-secondary border-0 mb-0">
              <div className="card-body px-lg-5 py-lg-5">
                <div
                  className="container mt--3 mb-4 "
                  style={{ textAlign: "center" }}
                >
                  <Link to="/entrar" className="navbar-brand">
                    <img src="../../assets/img/logo.png" />
                  </Link>
                </div>
                <Form ref={formRef} onSubmit={login}>
                  <div className="form-group mb-3">
                    <Input
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      iconLeft="ni ni-email-83"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      className="form-control"
                      placeholder="Password"
                      iconLeft="ni ni-lock-circle-open"
                      type="password"
                      name="senha"
                    />
                  </div>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      onChange={(e) => setRemember(e.target.checked)}
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Lembrar-se de mim.</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <ButtonLoading
                      type="submit"
                      isLoading={buttonLoading}
                      overText="Iniciando"
                      className="btn btn-primary my-4"
                      text="Iniciar Sessão"
                    />
                  </div>
                </Form>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <Link to="/recuperar-senha" className="text-light">
                  <small>Esqueceu a senha?</small>
                </Link>
              </div>
              <div className="col-6 text-right">
                <Link to="/criar-conta" className="text-light">
                  <small>Criar nova conta</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
