import React, { useState, useEffect } from "react";
import Cards from "../components/cards";
import styles from "./styles.module.css";
import api from "../server/api";

export default function Home() {
  // eslint-disable-next-line
  const [card, setCard] = useState([]);

  useEffect(() => {
    api.get("/stages").then((res) => {
      setCard(res.data);
      console.log(card);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {card.map((item) => {
          if (item.dateStart === "" || item.dateStart === 0) {
            return (
              <Cards
                backgroundColor="#959595"
                key={item.id}
                stateName={item.status}
                date={item.dateStart}
                image={item.id}
              />
            );
          }

          if (item.dateStart !== "") {
            return (
              <Cards
                backgroundColor="#117e0b"
                date={item.dateStart}
                key={item.id}
                stateName={item.status}
                check={true}
                image={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
