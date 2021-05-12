/**
 * Mdodules
 */
import React, { useState, useEffect, useRef } from "react";
import { Form } from "@unform/web";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * Components
 */
import Input from "../../../components/fields/Input";
import Select from "../../../components/fields/Select";
import ButtonLoading from "../../../components/ButtonLoading";

/**
 * Constants
 */
import Constants from "../../../general/constants";

/**
 * Handle APIs
 */

/**
 * Functions
 */
import { generateArrayForSelectComponent } from "../../../general/genericsFun";

export default function FirstLogin() {
  const [user, setUser] = useState({});
  const [peopleType, setPeopleType] = useState([]);
  const [activitiesCompanies, setActivitiesCompanies] = useState([]);
  const [userInformation, setUserInformation] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Refs
  const formRef = useRef();

  // Params
  const { userId } = useParams();

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      if (formRef) {
        setUser();

        const initialData = {
          user: {
            email: "",
          },
        };

        formRef.current.setData(initialData);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function goBack() {
    localStorage.removeItem(Constants.USER_TOKEN);
    navigate("/entrar");
  }

  async function handleSubmit(data) {
    try {
      let user = data.user;
      delete data["user"];

      if (formRef) {
        updateUser();
      } else {
        toast.error("Falha ao salvar os dados");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function updateUser(personId, user) {
    try {
      if (formRef) {
        createClient(personId);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function createClient(personsId) {
    try {
      if (formRef) {
        toast.success("Dados salvos com sucesso");
        navigate(`/dashboard`);
      } else {
        toast.error("Falha ao salvar os dados");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div
        className="header pb-6 d-flex align-items-center"
        style={{
          minHeight: "350px",
          backgroundImage: "url(../../assets/img/theme/profile-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-default opacity-8"></span>
      </div>

      <div className="container-fluid mt--9">
        <div className="row justify-content-center">
          <div className="col-xl-8 order-xl-1">
            <div className="container">
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">Seja Bem-Vindo {user.userName}</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <Form ref={formRef} onSubmit={handleSubmit}>
                    <h6 className="heading-small text-muted mb-4">
                      Informações da sua empresa
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <Input
                            type="text"
                            id="nif"
                            name="nIF"
                            title="NIF"
                            className="form-control"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            type="text"
                            id="input-username"
                            className="form-control form-control-sm"
                            title="Nome"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <Input
                            type="text"
                            id="sigla"
                            name="sigla"
                            title="Sigla"
                            className="form-control"
                          />
                        </div>
                        <div className="col-lg-6">
                          <Input
                            type="number"
                            min={0}
                            max={9999}
                            id="membersNumber"
                            className="form-control form-control-sm"
                            title="Nº de Membros"
                            name="membersNumber"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <Select
                            title="Tipo de Pessoa"
                            name="personTypeId"
                            loading={!peopleType.length > 0}
                            data={peopleType || []}
                          />
                        </div>
                        <div className="col-lg-6">
                          <Select
                            title="Actividade da Companhia"
                            name="activityCompanyId"
                            loading={!activitiesCompanies.length > 0}
                            data={activitiesCompanies || []}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="collapse" id="user-information">
                      <h6 className="heading-small text-muted mb-4">
                        Suas informações como utilizador
                      </h6>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-lg-6">
                            <Input
                              type="email"
                              id="email"
                              name="user.email"
                              title="E-mail"
                              className="form-control"
                            />
                          </div>
                          <div className="col-lg-6">
                            <Input
                              type="password"
                              id="passwordHash"
                              className="form-control form-control-sm"
                              title="Senha"
                              name="user.passwordHash"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <p
                      className="heading-small text-muted mb-4"
                      onClick={() => setUserInformation(!userInformation)}
                    >
                      <a
                        type="button"
                        data-toggle="collapse"
                        data-target="#user-information"
                        aria-expanded="false"
                        aria-controls="user-information"
                      >
                        {!userInformation ? "Mostrar" : "Esconder"} suas
                        informações como utilizador
                      </a>
                    </p>
                    <div className="text-center">
                      <ButtonLoading
                        type="submit"
                        isLoading={buttonLoading}
                        overText="Registando"
                        className="btn btn-primary my-4"
                        text="Registar-se"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary my-4"
                        onClick={goBack}
                      >
                        Cancelar
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
