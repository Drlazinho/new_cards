import { Container } from "./styles";
import React from "react";
import Card from "./components/Card";

export default function BreadCrump2({name1, date1, idImage1, 
  name2, date2, idImage2, name3, date3, idImage3, name4, date4, idImage4, btnToModalCheck1, btnToModalCheck2, btnToModalCheck3,btnToModalCheck4}) {

  return (
    <>
    <Container>
          <Card name={name1} idImage={idImage1} date={date1} modalResolution={btnToModalCheck1} />
          <Card name={name2} idImage={idImage2} date={date2} modalResolution={btnToModalCheck2}/>
          <Card name={name3} idImage={idImage3} date={date3} modalResolution={btnToModalCheck3}/>
          <Card name={name4} idImage={idImage4} date={date4} modalResolution={btnToModalCheck4}/>
    </Container>
    </>
  );
}
