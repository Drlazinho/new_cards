import BreadCrump from "./components/BreadCumbs";
import BreadCrump2 from "./components/BreadCumbs2WithModal";
import styles from "./styles.module.css";

function App() {
  return (
    <>
      <main>
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
          <br />
          <br />
          {/* <BreadCrump2
            name1={"Produção"}
            idImage1={1}
            date1={""}
            btnToModalCheck1={""}
            name2={"Inspeção"}
            idImage2={2}
            date2={"21/05/97"}
            btnToModalCheck2={""}
            name3={"Transporte"}
            idImage3={3}
            date3={"21/05/97"}
            btnToModalCheck3={""}
            name4={"Carregamento"}
            idImage4={4}
            date4={"21/05/97"}
            btnToModalCheck4={""}
          /> */}
          <br/>
          <br/>
        </div>
      </main>
    </>
  );
}

export default App;
