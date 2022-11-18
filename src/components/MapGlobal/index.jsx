import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "./styles.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  //Coord: LONG E LAT
  { name: "Saída", coordinates: [119.449013, 26.024702], date: "17/11/2022" },
  {
    name: "Transporte Fase I",
    coordinates: [81.279716, 5.339848],
    date: "jyfuyfuj",
  },
  {
    name: "Transporte Fase II",
    coordinates: [43.313079, 12.178965],
    date: "cgyfhvjyfhv",
  },
  {
    name: "Transporte Fase III",
    coordinates: [-6.608796, 34.85889],
    date: "",
  },
  {
    name: "AMVOX - Entrega",
    coordinates: [-38.303833, -12.731694],
    date: "",
  },
];

export default function MapChart({ dates }) {
  const datesTraffic = dates;

  console.log(datesTraffic);

  return (
    <ComposableMap className="map" projection="geoEquirectangular">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#000000"
              stroke="#853333"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, date }) => (
        <>
          <Marker key={name} coordinates={coordinates}>
            {/* <Marker key={name} coordinates={newCoordinates}> */}
            <g
              fill="none"
              stroke="#00ff15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>

            <text
              textAnchor="middle"
              y={-30}
              style={{ fontFamily: "system-ui", fill: "#ffffff" }}
            >
              {name}
            </text>
            {datesTraffic.map((item, valorTotal) => {
              

              return <text y={valorTotal + 20}>{item.nome}</text>;
            })}
          </Marker>
        </>
      ))}
    </ComposableMap>
  );
}
