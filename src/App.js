import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ListaImagenes from "./components/ListaImagenes";
import axios from "axios";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);

  // Paginador
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") {
        return;
      }

      const imgPorPagina = 20;
      const key = "18725707-9f054c6b941dad20ff223e2ed";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPorPagina}&page=${paginaActual}`;

      const respuesta = await axios.get(url);

      guardarImagenes(respuesta.data.hits);

      // Calcular total paginas
      const totalPaginas = Math.ceil(respuesta.data.totalHits / imgPorPagina);
      guardarTotalPaginas(totalPaginas);

      // Saltar arriba
      const saltarArriba = document.querySelector(".App-header");
      saltarArriba.scrollIntoView({ behavior: "smooth" });
    };
    consultarApi();
  }, [busqueda, paginaActual]);

  // Pagina Anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if (nuevaPaginaActual === 0) {
      return;
    }
    guardarPaginaActual(nuevaPaginaActual);
  };

  // Pagina Siguiente

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if (nuevaPaginaActual > totalPaginas) {
      return;
    }

    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="App">
      <h1 className="App-header">Descarga Imagenes Gratis</h1>
      <Form guardarBusqueda={guardarBusqueda}></Form>
      <div className="row justify-content-center">
        <ListaImagenes imagenes={imagenes}></ListaImagenes>

        <div className="col">
          {paginaActual === 1 ? null : (
            <button
              type="button"
              className="btn btn-warning"
              onClick={paginaAnterior}
            >
              &laquo; Anterior
            </button>
          )}

          {paginaActual === totalPaginas ? null : (
            <button
              type="button"
              className="btn btn-warning"
              onClick={paginaSiguiente}
            >
              Siguiente &raquo;
            </button>
          )}
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
