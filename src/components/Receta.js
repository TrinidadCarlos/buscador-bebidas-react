import React, { useContext, useState } from "react";
import { ModalRecetaContext } from "../context/ModalRecetaContext";
import Modal from 'react-bootstrap/Modal'


const Receta = ({ receta }) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    const {setIdReceta, setRecetaModal,recetaModal} = useContext(ModalRecetaContext);

    const buscarRecetaId = (id) => {
        setIdReceta(id);
    }


    const listarIngredientes = (datos) => {
        const ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if(datos[`strIngredient${i}`]){
                ingredientes.push(
                    <li> { datos[`strIngredient${i}`]} { datos[`strMeasure${i}`] } </li>
                );
            }
        
        }
        return ingredientes;
    }

  return (
    <div className="col-md-4 col-lg-3">
      <div className="card mt-2">
        <img
          src={receta.strDrinkThumb}
          className="card-img-top"
          alt={receta.strDrink}
        />
        <div className="card-body">
          <h5 className="card-title">{receta.strDrink}</h5>
          <button className="btn btn-primary fw-bold text-uppercase" onClick={() => {
              buscarRecetaId(receta.idDrink);
              handleShow();
            }}> Ver receta </button>
        </div>
      </div>

    
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="bg-primary bg-gradient">
          <Modal.Title className="fw-bold text-white">{recetaModal.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={recetaModal.strDrinkThumb} alt="" className="img-fluid"/>
            
            <h3 className="my-3 fw-bold">Instructions:</h3>
            <p className=" fw-bold">
                {recetaModal.strInstructions}
            </p>

            <h4 className="fw-bold">Ingredientes y cantidades</h4>
            <ul>
                {listarIngredientes(recetaModal)}
            </ul>

        </Modal.Body>
        <Modal.Footer className="bg-primary">
          <button variant="secondary" 
          onClick={() => {
              handleClose();
              setRecetaModal({});
        }}
          className="btn btn-warning fw-bold"
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    
    </div>
  );
};

export default Receta;
