import React, { useState, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Line,
} from "react-simple-maps";
import "./styles.css";
import { BsSearch } from "react-icons/bs";
import { TiMinus } from "react-icons/ti";
import { GoPlus } from "react-icons/go";
import ButtonZoom from "./components/ButtonZoom";
import { MarkerMap } from "./components/MarkersMap";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = ({
  data,
  setTooltipContent,
  dateSaida,
  dateFase1,
  dateFase2,
  dateFase3,
  dateEntregaFinal,
}) => {
  const datesContainers = data; //Containers

  // const datesFixedPlace = [
  //   dateSaida,
  //   dateFase1,
  //   dateFase2,
  //   dateFase3,
  //   dateEntregaFinal,
  // ];

  const markers = [
    //Coord: LONG E LAT
    { name: "Saída", coordinates: [119.449013, 26.024702], dateMarkerMap: dateSaida },
    {
      name: "Transporte Fase I",
      coordinates: [81.279716, 5.339848],
      dateMarkerMap: dateFase1,
    },
    {
      name: "Transporte Fase II",
      coordinates: [43.313079, 12.178965],
      dateMarkerMap: dateFase2,
    },
    {
      name: "Transporte Fase III",
      coordinates: [-6.608796, 34.85889],
      dateMarkerMap: dateFase3,
    },
    {
      name: "AMVOX - Entrega",
      coordinates: [-38.303833, -12.731694],
      dateMarkerMap: dateEntregaFinal,
    },
  ];

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [filter, setFilter] = useState("");

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  return (
    <div className="mapBox" data-tip="">
      {/* SEARCHFILTER */}
      <form className="boxFilter">
        <input className="dateInput" type="date" />

        <div className="searchInput">
          <input
            list="numbersContainers"
            name="numbersContainers"
            id="numbersContainers"
            placeholder="Procurar pelo nº do container"
            onChange={(e) => setFilter(e.target.value)}
          />
          <datalist id="numberContainers">
            {datesContainers.map((item) => <option value={item.number}>{(item.number)}</option>
            )}
          </datalist>

          <button type="submit">
            <BsSearch />
            Pesquisar
          </button>
        </div>
      </form>

      {/* Buttons */}
      <div className="controls">
        {/* Resolver problemas dos botões - Prioridade Secundária - Finalização */}
        {/* <ButtonZoom zoomEffects={handleZoomIn} children={<GoPlus />} />
        <ButtonZoom zoomEffects={handleZoomOut} children={<TiMinus />} /> */}
      </div>

      {/* MAPA */}
      <ComposableMap projection="geoEquirectangular" className="map">
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
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

          {/*LINHAS - Cria estrutura de Repetição das Linhas */}
          <Line
            from={[markers[0].coordinates[0], markers[0].coordinates[1]]}
            to={[markers[1].coordinates[0], markers[1].coordinates[1]]}
            stroke="#688a6b"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <Line
            from={[markers[1].coordinates[0], markers[1].coordinates[1]]}
            to={[markers[2].coordinates[0], markers[2].coordinates[1]]}
            stroke="#688a6b"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <Line
            from={[markers[2].coordinates[0], markers[2].coordinates[1]]}
            to={[markers[3].coordinates[0], markers[3].coordinates[1]]}
            stroke="#688a6b"
            strokeWidth={4}
            strokeLinecap="round"
          />
          <Line
            from={[markers[3].coordinates[0], markers[3].coordinates[1]]}
            to={[markers[4].coordinates[0], markers[4].coordinates[1]]}
            stroke="#688a6b"
            strokeWidth={4}
            strokeLinecap="round"
          />



          {markers.map(({ name, coordinates, dateMarkerMap, indice }) => (
            <>
              <Marker key={indice} coordinates={coordinates}>
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
                  y={-40}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#ffffff",
                    fontSize: ".9rem",
                  }}
                >
                  {name}
                </text>

                <text
                  textAnchor="middle"
                  y={-25}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#ffffff",
                    fontSize: ".8rem",
                  }}
                >
                  {dateMarkerMap}
                </text>
                  
                {datesContainers.filter(container => container.date === dateMarkerMap).map((container, index, arr) => {
                  return (
                    <>                      
                      <text
                        y = {15}
                        x= {-4}
                        className="containerPoint"
                        key={indice}
                        style={{
                          fontFamily: "system-ui",
                          fill: "#ff8800",
                          fontSize: "1rem",
                        }}
                      >
                        {arr.length} 
                      </text> 
                      <text
                        y = {30}
                        x= {-28}
                        className="containerPoint"
                        key={indice}
                        style={{
                          fontFamily: "system-ui",
                          fill: "#ff8800",
                          fontSize: "1rem",
                        }}
                      >
                        container
                      </text> 
                    </>
                  );
                })}
              </Marker>
            </>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
