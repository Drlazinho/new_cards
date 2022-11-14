import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalExample({titleStageModal, dateStageModal, checkedState}) {
  const [modal, setModal] = useState(false);
  // const [nestedModal, setNestedModal] = useState(false);
  // const [closeAll, setCloseAll] = useState(false);


  // function checkedStateStage() {
  //   setModal(!modal)

  // }

  const toggle = () => {
    
    setModal(!modal)
  };
  // const toggleNested = () => {
  //   setNestedModal(!nestedModal);
  //   setCloseAll(false);
  // };
  // const toggleAll = () => {
  //   setNestedModal(!nestedModal);
  //   setCloseAll(true);
  // };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{titleStageModal}</ModalHeader>
        <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <strong>{dateStageModal}</strong>          
          <br />
        </ModalBody>
        <ModalFooter>
          {/* CONDICIONAL DE MARCAÇÃO - PRECISA SER FEITA */}
          <Button color="primary" onClick={() => checkedState(toggle())} >
            Get Conclused
          </Button>{' '}
          <Button color="secondary" onClick={() => toggle()} >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;