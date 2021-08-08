import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
//crear el context
export const CategoriasContext = createContext();

//crear el provider
//CamelCaseUpperCase
const CategoriasProvider = (props) => {

    //crear el estate de context
    const [categorias, setCategorias] = useState([]);


    useEffect(() => {
        const consultarCategorias = async () => {
            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
                const consulta = await axios.get(url)
                setCategorias(consulta.data.drinks);
            } catch (error) {
                console.log(error);
            }
        }
        consultarCategorias();
    }, [])


    return (
        <CategoriasContext.Provider
            value={{
                categorias,
                setCategorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;