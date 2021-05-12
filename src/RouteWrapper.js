import React from "react";
import { Route, Navigate } from "react-router-dom";

import PropTypes from "prop-types";

import { isAuth, useAuth } from "./auth";

export default function RouteWrapper({
  element: Element,
  isPrivate,
  owner,
  ...rest
}) {
  const signed = isAuth();
  //
  // const {getUser}=useAuth();
  if (!signed && isPrivate) {
    return <Navigate to="/entrar" />;
  }

  if (signed && !isPrivate) {
    //const user=getUser();
    //    if(owner!==user.owner){
    //  return <Navigate to="/"/>
    //    }else{
    //      return <Navigate to="/dashboard" />;
    //    }
    return <Navigate to="/dashboard" />;
  }

  return <Route {...rest} element={<Element />} />;
}

/**
 * Default props
 */
RouteWrapper.defaultProps = {
  isPrivate: true,
};

/**
 * Prop Types
 */
RouteWrapper.propTypes = {
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
};
