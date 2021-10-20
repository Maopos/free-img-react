import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ListaImagenes from "./components/ListaImagenes";
import axios from "axios";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") {
        return;
      }

      const imgPorPagina = 30;
      const key = "18725707-9f054c6b941dad20ff223e2ed";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPorPagina}`;

      const respuesta = await axios.get(url);

      guardarImagenes(respuesta.data.hits);
    };
    consultarApi();
  }, [busqueda]);

  return (
    <div className="App">
      <h1 className="App-header">Free Img</h1>
      <Form guardarBusqueda={guardarBusqueda}></Form>
      <div className="row justify-content-center">
        <ListaImagenes imagenes={imagenes}></ListaImagenes>
      </div>
    </div>
  );
}

export default App;
