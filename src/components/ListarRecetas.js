import React, { useContext } from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListarRecetas = () => {
  const { guardarRecetas } = useContext(RecetasContext);

  return (
    <div>
      <h2 className="bg-warning rounded py-2 w-50 mx-auto fw-bold text-uppercase text-center">
        Listado de recetas
      </h2>
      <main className="row">
        {guardarRecetas.map((receta) => (
              <Receta key={receta.idDrink} receta={receta} />
            ))}
      </main>
    </div>
  );
};

export default ListarRecetas;
