import React from "react";
import { Link } from "react-router-dom";
import {Row, col} from "reactstrap";
export default function _404() {
  return (
    <div className="jumbotron container mt-5 ">
      <h1 className="display-4">Ops! Conteúdo inacessível!</h1>
      <p className="lead">
        O conteúdo que está tentando acessar pode ter sido movido, alterado ou
        eliminado.
      </p>
      <div style={{textAlign:"center"}}>
      <img src={require("../assets/Not_found.png")} alt="Pagina não encontrada" style={{ width:"600px", textAlign:"center" } } className="mb-3"/>
      </div>
   <br/>
   <div style={{textAlign:"end"}}>
   <Link className="btn btn-primary btn-lg " to="/dashboard" role="button">
        Continue navegando!
      </Link>
   </div>
     
    </div>
  );
}
