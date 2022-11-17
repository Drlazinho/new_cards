import BreadCrump from "./components/BreadCumbs";
import BreadCrump2 from "./components/BreadCumbs2WithModal";
import MapGlobal from "./components/MapGlobal";
import styles from "./styles.module.css";

function App() {

  const data = {
    entregas : undefined
  }

  return (
    <>
      <main>
        <div className={styles.container}>
          <BreadCrump
            name1={"Produção"}
            idImage1={1}
            date1={data.entregas}
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
            date1={data.entregas}
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
          <MapGlobal/>
          <br/>
          <br/>

        </div>
      </main>
    </>
  );
}

export default App;
