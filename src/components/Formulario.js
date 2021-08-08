import React, { Fragment, useState ,useContext } from "react";
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);
    const {setGuardarBusqueda} = useContext(RecetasContext);

    const [seleccion, setSeleccion] = useState({
        ingrediente: '',
        categoria:''
    });
    
const guardarValores = (e) =>{
    setSeleccion({
        ...seleccion,
        [e.target.name]: e.target.value
    });
}

const validarValores = (e) =>{
    e.preventDefault();
    if (Object.values(seleccion).some(v => v.trim() === '')) {
        console.log('todos los campos llenos');
        return;
    }
    setGuardarBusqueda(seleccion);

}

  return (
    <Fragment>  
      <div className="col-md-11 col-lg-8 mx-auto my-4">
        <form className="formulario p-3 rounded" onSubmit={validarValores}>
          <fieldset className="text-white text-center fw-bold mb-3">
            <legend>Busca bebidas por categoría o ingrediente</legend>
          </fieldset>
          <div className="row justify-content-evenly align-items-center">
            <div className="col-md-4">
              <label className="form-label text-white fw-bold text-center  d-block ">
                ingrediente
              </label>
              <input type="text" className="form-control" name="ingrediente" placeholder="Busca por Ingrediente" onChange={guardarValores}/>
            </div>

            <div className="col-md-4">
                <label className="form-label text-white fw-bold text-center d-block">Categoría</label>
                <select className="form-select" name="categoria" onChange={guardarValores}>
                    <option value="" selected disabled>--Categorías--</option>
                    {
                        categorias.map(c => (
                            <option value={c.strCategory} key={c.strCategory}> {c.strCategory} </option>
                        ))
                    }
                </select>
            </div>

            <div className="col-md-3 mt-4 ">  
                <input type="submit" className="btn btn-warning mx-auto d-block fw-bold" value="Buscar receta" />
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Formulario;
