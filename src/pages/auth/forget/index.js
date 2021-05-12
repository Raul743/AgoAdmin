import React, { useReducer, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Input from "../../../components/fields/Input";
import ButtonLoading from "../../../components/ButtonLoading/";

import { isEmpty } from "../../../general/genericsFun";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Api from "../../../services/api";

export default function Forget() {
  const [buttonLoading, setButtonLoading] = useState(false);

  // Ref
  const formRef = useRef(null);

  let register = async (data, { reset }) => {
    try {
      let dataSchema = {
        email: Yup.string().required("O nome é obrigatorio"),
      };

      const schema = Yup.object().shape(dataSchema);

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
      return;
    }
    /**
     * End Verifying fields
     */

    setButtonLoading(true);
    reset();
    try {
      const response = await Api.post("/recupera-senha", { data });

      if (!response.data.exist) {
        setButtonLoading(false);
        return toast.success("Utilizador não existe ");
      } else {
        setButtonLoading(false);
        return toast.success("Verifique o seu email");
      }
    } catch (err) {
      setButtonLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="main-content">
      <div className="header bg-gradient-primary pt-7 pb-5 pt-lg-8 pt-lg-9">
        <div className="container">
          <div className="header-body text-center mb-7">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 className="text-white">Recuperar senha</h1>
                <p className="text-lead text-white">
                  Informe abaixo o seu e-mail para receberes o link de
                  recuperação de senha.
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
          <div className="col-lg-6 col-md-8">
            <div className="card bg-secondary border-0">
              <div className="card-body px-lg-5 py-lg-5">
                <div
                  className="container mt--3 mb-4 "
                  style={{ textAlign: "center" }}
                >
                  <Link to="/entrar" className="navbar-brand">
                    <img src="../../assets/img/logo.png" />
                  </Link>
                </div>
                <Form ref={formRef} onSubmit={register} role="form">
                  <div className="row">
                    <div className="col-12">
                      <Input
                        id="email"
                        name="email"
                        iconLeft="ni ni-email-83 px-1"
                        placeholder="E-mail "
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <ButtonLoading
                      text="Recuperar Senha"
                      type="submit"
                      isLoading={buttonLoading}
                      className="btn btn-primary my-4"
                    />
                  </div>
                </Form>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Link to="/entrar" className="text-light">
                  <small>Já tenho uma conta</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
