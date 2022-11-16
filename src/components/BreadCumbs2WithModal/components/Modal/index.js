import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import './styles.css'

function ModalCheck({ titleStageModal, dateStageModal, checkedState }) {
  const [modal, setModal] = useState(false);
  const [check, setChecked] = useState(false);
  
  const toggle = () => {
    setModal(!modal);
  };

  const checked = () => {
    setChecked(!check);
    setModal(!modal);
  };


  return (
    <div>
      {check === true ? (
        <Button 
        onClick={toggle} className="btn-modal-cancel" size="lg" block>
          Click Me <br/> (Cancel)
        </Button>
      ) : (
        <Button onClick={toggle} className="btn-modal" block>
          Click Me
        </Button>
      )}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{titleStageModal}</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          <strong>{dateStageModal}</strong>
          <br />
        </ModalBody>
        <ModalFooter>
          {/* CONDICIONAL DE MARCAÇÃO - PRECISA SER FEITA */}
          {check === false ? (
            <>
              <Button color="primary" onClick={() => checkedState(checked())}>
                Get Conclused
              </Button>{" "}
              <Button color="secondary" onClick={() => toggle()}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button color="danger" onClick={() => checkedState(checked())}>
                Cancel Conclused
              </Button>{" "}
              <Button color="secondary" onClick={() => toggle()}>
                Cancel
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalCheck;
