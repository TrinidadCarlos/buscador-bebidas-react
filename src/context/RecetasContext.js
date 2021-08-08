import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [guardarRecetas, setGuardarRecetas] = useState([]);
  const [guardarBusqueda, setGuardarBusqueda] = useState({
    ingrediente: "",
    categoria: "",
  });

  useEffect(() => {
      const { ingrediente, categoria } = guardarBusqueda;
    const buscarRecetas = async () => {
        if(ingrediente.trim() === '' || categoria.trim() === '') return null;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
        const consulta = await axios.get(url);
        setGuardarRecetas(consulta.data.drinks);
      } catch (error) {
          console.log(error);
      }
    };
    buscarRecetas();
  }, [guardarBusqueda]);

  return (
    <RecetasContext.Provider
      value={{
        setGuardarBusqueda,
        guardarRecetas
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
