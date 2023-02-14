import BreadCrump from "./components/BreadCumbs";
import BreadCrump2 from "./components/BreadCumbs2WithModal";
import MapGlobal from "./components/MapGlobal";
import styles from "./styles.module.css";
import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import MapBrazil from "./components/MapBrazil";
import InputTeste from "./components/Input";
import { api } from "./services/api";
import { NavItem } from "reactstrap";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import BreadCrumpMobile from "./components/BreadCumbsMobile";




function App() {
  const qntContainers = {
    containers: [
      {
        nome: "Naruto",
        date: "22/11/2022",
        number: 100,
        produto: [],
      },
      {
        nome: "Kurama",
        date: "26/11/2022",
        number: 200,
        produto: [],
      },
      {
        nome: "Bleach",
        date: "26/11/2022",
        number: 300,
        produto: [],
      },
      {
        nome: "Pikachu",
        date: "22/11/2022",
        number: 400,
        produto: [],
      },
      {
        nome: "Hell",
        date: "24/11/2022",
        number: 500,
        produto: [],
      },
      {
        nome: "Vegeta",
        date: "25/11/2022",
        number: 600,
        produto: [],
      },
      {
        nome: "Boruto",
        date: "23/11/2022",
        number: 700,
        produto: [],
      },
    ],
  };

  const [content, setContent] = useState("");
  const [testeApi, setTesteApi] = useState([])
 
useEffect(() => {
  api.get('/fornecedores')
    .then((res) => setTesteApi(res.data))
  }, [setTesteApi])
  
  console.log(testeApi)
  return (
    <>
      <main>
        <div className={styles.container}>
         {/* <BreadCrump
            name1={"Produção"}
            idImage1={1}
            date1={""}
            name2={"Inspeção"}
            idImage2={2}
            date2={"21/05/97"}
            name3={"Transporte"}
            idImage3={3}
            date3={"21/05/97"}
            name4={"Carregamento"}
            idImage4={4}
            date4={""}
            toMobile
          /> */}
          <br/>
          <br/>
          <br/>
         <BreadCrumpMobile
            name1={"Produção"}
            idImage1={1}
            date1={""}
            name2={"Inspeção"}
            idImage2={2}
            date2={"21/05/97"}
            name3={"Transporte"}
            idImage3={3}
            date3={"21/05/97"}
            name4={"Carregamento"}
            idImage4={4}
            date4={""}
            toMobile
          />
          
          <br />
          <br />
          {/* <BreadCrump2
            name1={"生產"}
            idImage1={1}
            date1={"12/12/2022"}
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
          /> */}
          <br />
          <br />
          <div>
              {
                testeApi.map((item, index) => {
                  return (
                    <h1 key={index}>{item.fornecedor}</h1>
                  )
                })
              }
          </div>

          {/* Como as informações deverão chegar?! Objeto? Array? String */}
          {/* <MapGlobal
            setTooltipContent={setContent}
            data={qntContainers.containers}
            dateSaida={"22/11/2022"}
            dateFase1={"23/11/2022"}
            dateFase2={"24/11/2022"}
            dateFase3={"26/11/2022"}
            dateEntregaFinal={"27/11/2022"}
          /> */}
          {/* <ReactTooltip>{content}</ReactTooltip> */}
          <br />
          <br />
          {/* <MapBrazil /> */}
          {/* <InputTeste/> */}
        </div>
      </main>
    </>
  );
}

export default App;
