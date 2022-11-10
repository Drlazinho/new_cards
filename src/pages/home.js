import React, { useState, useEffect } from "react";
import Cards from "../components/Cards/index";
import styles from "./styles.module.css";
import NumberBox from "../components/NumberBox/index";
import api from '../server/api'

export default function Home() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    api.get("/stages").then((res) => {
      setCard(res.data);
      console.log(card);
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        {/* {card.map((item, index) => index < 4 && ( */}
          <Cards />
      </div>
    </>
  );
}
