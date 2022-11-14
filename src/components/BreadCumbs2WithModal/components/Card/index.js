import { Container, Content } from "./styles";
import React, { useState } from "react";

import bagImg from "../../../../assets/bag.png";
import factoryImg from "../../../../assets/factory.png";
import targetImg from "../../../../assets/target.png";
import truckImg from "../../../../assets/truck.png";
import { Checkbox } from "../Checkbox";
import ModalExample from "../Modal";

export default function Card({ name, date, idImage }) {
  function renderSwitch(number) {
    switch (number) {
      case 1 || "1": {
        return factoryImg;
      }
      case 2 || "2": {
        return targetImg;
      }
      case 3 || "3": {
        return truckImg;
      }
      case 4 || "4": {
        return bagImg;
      }
      default:
        break;
    }
  }

  const [checked, setChecked] = useState(false)

  function checkedState() {
    setChecked(!checked)
    console.log("MUDANDO ESTADO")
    console.log(checked)
  }

  return (
    <>
        <Container checked={checked}>
          <Content checked={checked}>
            <div className="interativeUser">
              <Checkbox isChecked={checked}/>
              {/* <input type="checkbox" disabled checked={true} /> */}
              <img className="img" src={renderSwitch(idImage)} alt="" />
            </div>
            <div className="descriptionBreadcrump">
              <p>{name}</p>
              <p>{date}</p>
              <ModalExample titleStageModal={name} dateStageModal={date} checkedState={checkedState}/>
            </div>
          </Content>
        </Container>
    </>
  );
}
