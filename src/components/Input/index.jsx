import React from "react";

export default function InputTeste() {
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
        date: "24/11/2022",
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

  return (
    <form className="boxFilter">
      <input className="dateInput" type="date" />

      <div className="searchInput">
        <input
          list="numbersContainers"
          name="numbersContainers"
          id="numbersContainers"
          placeholder="Procurar pelo nº do container"
        />
        <datalist id="numberContainers">
          {qntContainers.containers.map((item) => {
            console.log(item.number);
            return <option value={item.number}>{item.number}</option>;
          })}
        </datalist>

        <button type="submit">Pesquisar</button>
      </div>
    </form>
  );
}
