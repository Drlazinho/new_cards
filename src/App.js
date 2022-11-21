import BreadCrump from "./components/BreadCumbs";
import BreadCrump2 from "./components/BreadCumbs2WithModal";
import MapGlobal from "./components/MapGlobal";
import styles from "./styles.module.css";
import React, { useState } from "react";
import ReactTooltip from "react-tooltip";


function App() {
  const EntregaNavios = {
    navios: [
      {
        nome: "Naruto",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Kurama",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Bleach",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Pikachu",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Hell",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Vegeta",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Boruto",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Goku",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Shikamaru",
        data: "22/11/11",
        produto: [],
      },
      {
        nome: "Hinata",
        data: "22/11/11",
        produto: [],
      },
    ],
  };

  const [content, setContent] = useState("");


  return (
    <>
      <main>
        <div className={styles.container}>
          <BreadCrump
            name1={"Produção"}
            idImage1={1}
            date1={''}
            name2={"Inspeção"}
            idImage2={2}
            date2={"21/05/97"}
            name3={"Transporte"}
            idImage3={3}
            date3={"21/05/97"}
            name4={"Carregamento"}
            idImage4={4}
            date4={""}
          />
          <br />
          <br />
          <BreadCrump2
            name1={"生產"}
            idImage1={1}
            date1={''}
            btnToModalCheck1={"sdadas"}
            name2={"檢查"}
            idImage2={2}
            date2={"21/05/97"}
            btnToModalCheck2={"dasda"}
            name3={"運輸"}
            idImage3={3}
            date3={"21/05/97"}
            btnToModalCheck3={""}
            name4={"正在加載"}
            idImage4={4}
            date4={"21/05/97"}
            btnToModalCheck4={""}
          />
          <br />
          <br />

          {/* Como as informações deverão chegar?! Objeto? Array? String */}
          <MapGlobal setTooltipContent={setContent} dates={EntregaNavios.navios}/>
          <ReactTooltip>{content}</ReactTooltip>
          <br />
          <br />
        </div>
      </main>
    </>
  );
}

export default App;
