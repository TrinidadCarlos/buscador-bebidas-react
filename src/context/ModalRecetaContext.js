import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalRecetaContext = createContext();

const ModalRecetaProvider = (props) => {


    const [idReceta, setIdReceta] = useState(null);
    const [recetaModal, setRecetaModal] = useState({});

    useEffect(() => {
        const buscarReceta = async () => {
            if(idReceta === null) return null;
            try {    
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
                const consulta = await axios.get(url);
                setRecetaModal(consulta.data.drinks[0]);
            } catch (error) {
                console.log(error);
            }
        }
        buscarReceta();
    }, [idReceta, recetaModal])

    return ( 
        <ModalRecetaContext.Provider
            value={{
                setIdReceta,
                setRecetaModal,
                recetaModal
            }}
        >
            {props.children}
        </ModalRecetaContext.Provider>
     );
}
 
export default ModalRecetaProvider;