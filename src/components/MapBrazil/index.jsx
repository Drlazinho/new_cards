import React, { useState, memo, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Line,
  Annotation,
} from "react-simple-maps";
import "./styles.css";
import mapBrTopoJson from "./mapbr.json";
import { geoCentroid } from "d3-geo";
import { BsSearch } from "react-icons/bs";
import { markersLocalization } from "../../utils/localizationUFs";

const MapBrazil = ({ dates, setTooltipContent }) => {
  const [filterContainer, setFilterContainer] = useState("");
  const [filterContainerData, setFilterContainerData] = useState("");
  const [containerList, setContainerList] = useState([])

  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

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

  useEffect(() => {
    fetch("./mapbr.json");
  }, []);

  const markers = markersLocalization;

  return (
    <div className="mapBox" data-tip="">
      {/* SEARCHFILTER */}
      <form className="boxFilter">
        <input
          className="dateInput"
          type="date"
          onChange={(e) => setFilterContainerData(e.target.value)}
          disabled
        />

        <div className="searchInput">
          <input
            list="numbersContainers"
            name="numbersContainers"
            // value={filterContainer}
            id="numbersContainers"
            placeholder="Procurar pelo nº do container"
            // onChange={(e) => setFilterContainer(e.target.value)}
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="controls">
        <button onClick={handleZoomIn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button onClick={handleZoomOut}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      {/* MAPA */}
      <ComposableMap projection="geoEquirectangular" className="map">
        <ZoomableGroup
          zoom={5}
          center={[-52.303833, -12.731694]}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={mapBrTopoJson}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#000000"
                  stroke="#853333"
                  strokeWidth=".2"
                />
              ))
            }
          </Geographies>

          {/* <Line
            from={[markers[0].coordinates[0], markers[0].coordinates[1]]}
            to={[markers[1].coordinates[0], markers[1].coordinates[1]]}
            stroke="#688a6b"
            strokeWidth={1}
            strokeLinecap="round"
          /> */}

          <Annotation
            subject={[-37.303833, -10.731694]}
            dx={5}
            dy={5}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              x={3}
              y={2}
              style={{
                fontFamily: "system-ui",
                fill: "#ffffff",
                fontSize: ".2rem",
              }}
            >
              {"SE"}
            </text>
          </Annotation>
          <Annotation
            subject={[-36.303833, -9.731694]}
            dx={6}
            dy={3}
            connectorProps={{
              stroke: "#FF5533",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="end"
              alignmentBaseline="middle"
              fill="#F53"
              x={4}
              y={-0.1}
              style={{
                fontFamily: "system-ui",
                fill: "#ffffff",
                fontSize: ".2rem",
              }}
            >
              {"AL"}
            </text>
          </Annotation>

          {markers.map(({ name, coordinates, type, offSetY, offSetX }) => (
            <Marker key={name} coordinates={coordinates}>
              {/* <g
                  fill="none"
                  stroke="#00ff15"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g> */}

              <circle r={1} fill="#F53" />

              <text
                textAnchor="middle"
                y={offSetY}
                x={offSetX}
                style={{
                  fontFamily: "system-ui",
                  fill: "#ffffff",
                  fontSize: ".2rem",
                }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapBrazil);
