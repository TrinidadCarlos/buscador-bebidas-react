import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListarRecetas from "./components/ListarRecetas";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ModalRecetaProvider from "./context/ModalRecetaContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalRecetaProvider>
          <Header />
          <div className="container">
            <div className="row">
              <Formulario />
            </div>
            <div className="row">
              <ListarRecetas />
            </div>
          </div>
        </ModalRecetaProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
