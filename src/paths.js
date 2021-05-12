/**
 * Pages
 */

// Auth

import Teste from "./pages/teste/teste";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Forget from "./pages/auth/forget";
import FirstUse from "./pages/auth/firstUser";

import Main from "./pages";

// Home
import Home from "./pages/main";

// Profile
import Profile from "./pages/profile";

// 404
import _404 from "./pages/404";

//users
import user from "./pages/users";
//papeis
import papeis from "./pages/categorias";

//vagas
import vagas from "./pages/vagas";

//profissaoo
import profissao from "./pages/profissoes";

//Localizacao
import Localizacao from "./pages/localizacao";

//Denucia
import Denucia from "./pages/denucias";
const routes = [
  {
    nested: true,
    path: "/entrar",
    element: Auth,
    isPrivate: false,
    outlets: [
      {
        path: "/",
        element: Login,
        isPrivate: false,
      },
    ],
  },
  {
    nested: true,
    path: "/criar-conta",
    element: Auth,
    isPrivate: false,
    outlets: [
      {
        path: "/",
        element: Register,
        isPrivate: false,
      },
    ],
  },
  {
    nested: true,
    path: "/recuperar-senha",
    element: Auth,
    isPrivate: false,
    outlets: [
      {
        path: "/",
        element: Forget,
        isPrivate: false,
      },
    ],
  },
  {
    nested: true,
    path: "/primeiro-uso/:userId",
    element: Auth,
    outlets: [
      {
        path: "/",
        element: FirstUse,
      },
    ],
  },
  {
    nested: true,
    path: "/",
    element: Main,
    outlets: [
      {
        path: "/",
        element: Home,
        owner: "isAdmin",
      },
      {
        path: "/dashboard",
        element: Home,
        owner: "isAdmin",
      },

      {
        path: "perfil",
        element: Profile,
      },
      {
        path: "users",
        element: user,
        owner: "isAdmin",
      },
      {
        path: "papeis",
        element: papeis,
        owner: "isAdmin",
      },
      {
        path: "vagas",
        element: vagas,
        owner: "isAdmin",
      },
      {
        path: "profissoes",
        element: profissao,
        owner: "isAdmin",
      },
      {
        path: "Localizacao",
        element: Localizacao,
        owner: "isAdmin",
      },
      {
        path: "denucias",
        element: Denucia,
        owner: "isAdmin",
      },
    ],
  },
  {
    path: "/teste",
    element: Teste,
  },
  {
    path: "*",
    element: _404,
  },
];

export default routes;
