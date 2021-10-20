import React, { useState } from "react";
import Error from "./Error";

const Form = ({guardarBusqueda}) => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const busquedaImg = (e) => {
    e.preventDefault();

    // Validar form
    if (termino.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarBusqueda(termino)
  };

  return (
    <form onSubmit={busquedaImg}>
      <br />
      <div className="container col-8">
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca una imagen..."
              onChange={(e) => guardarTermino(e.target.value)}
            />
          </div>
          <br />
          <br />
          <br />
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-warning btn-block w-100"
              value={"Buscar"}
            />
          </div>
        </div>
        {error ? (
          <Error mensaje="Debes escribir un término de busqueda..."></Error>
        ) : null}
      </div>
    </form>
  );
};

export default Form;
