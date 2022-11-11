import { Container, Content } from "./styles";
import React from "react";

import bagImg from "../../../../assets/bag.png";
import factoryImg from "../../../../assets/factory.png";
import targetImg from "../../../../assets/target.png";
import truckImg from "../../../../assets/truck.png";
import { Checkbox } from "../Checkbox";

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
    }
  }

  return (
    <>
      {date !== "" || null || 0 ? (
        <Container checked>
          <Content checked>
            <div className="interativeUser">
              <Checkbox isChecked />
              {/* <input type="checkbox" disabled checked={true} /> */}
              <img className="img" src={renderSwitch(idImage)} alt="" />
            </div>
            <div className="descriptionBreadcrump">
              <p>{name}</p>
              <p>{date}</p>
            </div>
          </Content>
        </Container>
      ) : (
        <Container>
          <Content>
            <div className="interativeUser">
              <Checkbox />
              {/* <input type="checkbox" disabled checked={false} /> */}
              <img className="img" src={renderSwitch(idImage)} alt="" />
            </div>

            <div className="descriptionBreadcrump">
              <p>{name}</p>
              <p>{"Sem Data"}</p>
            </div>
          </Content>
        </Container>
      )}
    </>
  );
}
