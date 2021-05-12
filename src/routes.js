import React from "react";
import { Routes } from "react-router-dom";

import { AuthProvider } from "./auth";

import RouteWrapper from "./RouteWrapper";

// Paths
import Paths from "./paths";

export default function ContainerRoutes() {
  return (
    <AuthProvider>
      <Routes>{Paths.map((route) => makeRoute(route))}</Routes>
    </AuthProvider>
  );
}

function makeRoute(route) {
  if (!route.nested) {
    return (
      <RouteWrapper
        path={route.path}
        element={route.element}
        isPrivate={route.isPrivate}
      />
    );
  }

  return (
    <RouteWrapper
      path={route.path}
      element={route.element}
      isPrivate={route.isPrivate}
    >
      {route.outlets.map((outlet) => makeRoute(outlet))}
    </RouteWrapper>
  );
}
