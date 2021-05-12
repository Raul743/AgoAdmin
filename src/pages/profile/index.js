import React, { useState, useEffect, useRef } from "react";
import { Form } from "@unform/web";
import Footer from "../../components/footer";
import Input from "../../components/fields/Input";
import Constants from "../../general/constants";
import Avatar from "./avatar";
import Api from "../../services/api";
import * as Yup from "yup";
import ButtonLoading from "../../components/ButtonLoading";
import { toast } from "react-toastify";
/**
 * Authentication
 */
import { useAuth } from "../../auth";
export default function Profile() {
  const [user, setUser] = useState({});
  const { getUser } = useAuth();

  useEffect(() => {
    setUser(getUser());
  }, [getUser]);
  const formRef = useRef(null);
  const formRefoto = useRef(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  let register = async (data, { reset }) => {
    try {
      let dataSchema = {
        nome: Yup.string(),
        email: Yup.string(),
        senha: Yup.string().min(8, "deve conter no minimo 8"),
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
      console.log("tentando", data);
      alert();
      const response = await Api.post("/edicaoAdmin", { data });

      if (response.data.exist) {
        setButtonLoading(false);
        return toast.error("existe dados ja esta em uso");
      }
      console.log(response.data);
      if (response.data.sucesso) {
        setButtonLoading(false);
        return toast.success("edição feita com sucesso");
      } else {
        setButtonLoading(false);
        return toast.error("Falha ao cadastrar");
      }
    } catch (err) {
      setButtonLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-xl-4 order-xl-2">
            <Form ref={formRefoto} onSubmit={(data) => console.log(data)}>
              <div className="card card-profile">
                <img
                  src="../../assets/img/theme/img-1-1000x600.jpg"
                  alt="Image placeholder"
                  className="card-img-top"
                />

                <Avatar name="avatar_id" />
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                <div className="card-body pt-0">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">Categoria</span>

                          <div className="h5 font-weight-300">
                            <i className="ni location_pin mr-2"></i>
                            {user.categoria}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h5 className="h3">{user.nome}</h5>
                  </div>
                </div>
              </div>
            </Form>
          </div>

          <div className="col-xl-8 order-xl-1">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0">Editar Perfil </h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <Form
                  ref={formRef}
                  onSubmit={(data) => console.log(data, "feito")}
                  className="needs-validation mt--21"
                  onSubmit={register}
                  noValidate
                >
                  <h6 className="heading-small text-muted mb-4">
                    Informação do Utilizador
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            for="input-username"
                          >
                            Nome
                          </label>
                          <Input
                            type="text"
                            id="input-username"
                            className="form-control"
                            placeholder="nome completo"
                            name="nome"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            for="input-email"
                          >
                            Email
                          </label>
                          <Input
                            type="email"
                            id="input-email"
                            className="form-control"
                            placeholder="jesse@example.com"
                            name="emai"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            for="input-password"
                          >
                            Senha
                          </label>
                          <Input
                            type="text"
                            id="input-password"
                            className="form-control"
                            placeholder=""
                            name="senha"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />
                  <div
                    style={{
                      marginTop: 27,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <ButtonLoading
                      text="Editar"
                      type="submit"
                      overText="Editando..."
                      isLoading={buttonLoading}
                      className="btn btn-primary my-4"
                    />
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
