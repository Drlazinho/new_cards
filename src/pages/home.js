import React from "react";
import BreadCrump from "../components/BreadCumbs/index";
import styles from "./styles.module.css";

export default function Home() {

  return (
    <>
      <div className={styles.container}>
          <BreadCrump 
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
          date4={"21/05/97"}          
          />
      </div>
    </>
  );
}
