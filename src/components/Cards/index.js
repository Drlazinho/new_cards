import { Bag, Target, Truck, Factory } from "phosphor-react";
import { Container, Card } from "./styles";
import React, { useState, useEffect } from "react";
import api from "../../server/api";

export default function Cards(props) {
  function renderSwitch(param) {
    switch (param) {
      case 1 || "1": {
        return <Factory size={32} />;
      }
      case 2 || "2": {
        return <Target size={32} />;
      }
      case 3 || "3": {
        return <Truck size={32} />;
      }
      case 4 || "4": {
        return <Bag size={32} />;
      }
    }
  }

  const [dateCard, setDateCards] = useState([]);

  useEffect(() => {
    api.get("/stages").then((res) => {
      setDateCards(res.data);
    });
  }, []);

  return (
    <Container>
      {dateCard.slice(0, 4).map((item) => {
        if (item.dateStart === "" || item.dateStart === 0) {
          return (
              <Card>
                <input type="checkbox" disabled checked={false} />
                <div className="descriptionBreadcrump">
                  {<i>{renderSwitch(item.id)}</i>}
                  <p>{item.status}</p>
                </div>
              </Card>
          );
        }
        if (item.dateStart !== 0) {
          return (
              <Card checked>
                <input type="checkbox" disabled checked={true} />
                <div className="descriptionBreadcrump">
                  {<i>{renderSwitch(item.id)}</i>}
                  <p>{item.status}</p>
                </div>
              </Card>
          );
        }
      })}
    </Container>
  );
}
