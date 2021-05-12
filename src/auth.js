import React, { useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

/**
 * Constants
 */
import Constants from "./general/constants";

/**
 * Handle API
 */
import Api from "./services/api";

/**
 * Context
 */
const AuthContext = createContext();

/**
 * Provider
 */
export const AuthProvider = ({ children }) => {
  // useNavigate to navigate the others pages programmatic
  const navigate = useNavigate();

  async function signIn(data, formRef) {
    try {
      const dataSchema = {
        email: Yup.string().email().required("Informe o e-mail"),
        senha: Yup.string().required("Informe a sua senha"),
      };

      const schema = Yup.object().shape(dataSchema);

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        let errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
      return;
    }

    try {
      // Get the token from api

      const response = await Api.post("/sessao", { data });
      console.log("testeeeeeee", response.data.user);
      // If successful:
      if (response.data.user.sucesso) {
        // Get token

        const { id, token, ...use } = response.data.user;
        if (use.categoria != "admin") {
          return toast.error("essa área é restrita para administrador");
        }
        use.id = id;
        if (token) {
          // Save cookie 'remember me'

          // Save the user token in local storage
          localStorage.setItem(Constants.USER_TOKEN, token);

          // This user is Person?
          if (use != null && id) {
            // Save the user data in local storage
            localStorage.setItem(Constants.USER_DATA, JSON.stringify(use));

            // Navigate to the home.
            navigate(`/dashboard`);
          } else if (id) {
            // Navigate to the first page.
            navigate(`/primeiro-uso/${id}`);
          }
        } else {
          const { message } = response.data.data.login;
          if (message === "invalid-username-or-password") {
            toast.error("E-email ou senha inválida", {
              position: "top-center",
            });
          }
        }
      } else {
        toast.error("Falha ao iniciar sessão", {
          position: "top-center",
        });
      }
    } catch (exception) {
      // If error:
      toast.error("Houve um erro ao iniciar a sessão. Tente novamente", {
        position: "top-center",
      });
      console.log(exception);
    }
  }

  function getUser() {
    let user = localStorage.getItem(Constants.USER_DATA);

    user = JSON.parse(user);

    return user ?? null;
  }

  return (
    <AuthContext.Provider value={{ getUser, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function isAuth() {
  const token = localStorage.getItem(Constants.USER_TOKEN);

  return token ? true : false;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
