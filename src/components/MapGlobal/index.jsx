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
  { markerOffset: -30, name: "Saída", coordinates: [119.449013, 26.024702], date: "17/11/2022"},
  {
    markerOffset: -30,
    name: "Transporte Fase I",
    coordinates: [81.279716, 5.339848],
    date: "jyfuyfuj"
  },
  {
    markerOffset: -30,
    name: "Transporte Fase II",
    coordinates: [43.313079, 12.178965],
    date: "cgyfhvjyfhv"
  },
  {
    markerOffset: -30,
    name: "Transporte Fase III",
    coordinates: [-6.608796, 34.85889],
    date: ""
  },
  {
    markerOffset: -30,
    name: "AMVOX - Entrega",
    coordinates: [-38.303833, -12.731694],
    date: ""
  },
];

export default function MapChart({name, date, lat, long,}) {

    const newCoordinates = [long, lat]

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
      {markers.map(({ name, coordinates, markerOffset, date }) => (
        <>
          <Marker key={name} coordinates={coordinates}>
            {date !== "" ? (
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
            ) : (
                <g
                fill="none"
                stroke="#ff2a00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
            )}
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "#ffffff" }}
            >
              {name}
            </text>
          </Marker>
        </>
      ))}
    </ComposableMap>
  );
}
