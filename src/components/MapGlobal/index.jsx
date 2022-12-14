import React, { useState, memo, useMemo, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Line,
} from "react-simple-maps";
import "./styles.css";


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = ({
  data,
  dateSaida,
  dateFase1,
  dateFase2,
  dateFase3,
  dateEntregaFinal,
}) => {

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

  const [filterContainer, setFilterContainer] = useState("");
  const [filterContainerData, setFilterContainerData] = useState("");
  const [containerList, setContainerList] = useState([])

  useEffect(() => {
    setContainerList(data)
  }, []);

  function handleMoveEnd(position) {
    setPosition(position);
  }

  function ContainerFiltered() {
    return containerList.filter((item) => 
      item.number === parseInt(filterContainer)
       )
  }

  var filteredList = useMemo(ContainerFiltered, [filterContainer, containerList])

  return (
    <div className="mapBox" data-tip="">
      <form className="boxFilter">
        <input className="dateInput" type="date" onChange={(e) => setFilterContainerData(e.target.value)} disabled/>

        <div className="searchInput">
          <input
            list="numbersContainers"
            name="numbersContainers"
            value={filterContainer}
            id="numbersContainers"
            placeholder="Procurar pelo nº do container"
            onChange={(e) => setFilterContainer(e.target.value)}
          />
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

          {markers.map(({ name, coordinates, dateMarkerMap }) => (
              <Marker key={name} coordinates={coordinates}>
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

                {filterContainer === "" && filterContainerData === "" && data.filter(container => container.date === dateMarkerMap).map((container, index, arr) => {
                  return (
                    <svg  viewBox="0 0 800 700" xmlns="https://www.w3.org/2000/svg" x={-57} key={container.number}>                      
                      <text
                        y = {15}
                        x= {-4}
                        className="containerPoint"
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
                        style={{
                          fontFamily: "system-ui",
                          fill: "#ff8800",
                          fontSize: ".8rem",
                        }}
                        >
                        containers
                      </text> 
                    </svg>
                  );
                })}

                {filteredList.filter(container => container.date === dateMarkerMap).map((item, index)  => {
                  return (
                    <text
                    y = {15}
                    x= {-20}
                    className="containerPoint"
                    key={item.number}
                    style={{
                      fontFamily: "system-ui",
                      fill: "#daff00",
                      fontSize: "1rem",
                    }}
                    >
                         nº {item.number}
                      </text> 
                  );
                })}
              </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
