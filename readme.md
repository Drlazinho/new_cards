            <Marker key={indice} coordinates={coordinates}>
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

                {datesTraffic.map((item, indice) => {
                  var distance = indice * 4;
                  return (
                    <text
                      key={indice}
                      y={distance}
                      style={{
                        fontFamily: "system-ui",
                        fill: "#ff8800",
                        fontSize: "21px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {"."}
                    </text>
                  );
                })}
                <text
                  y={20}
                  x={10}
                  style={{
                    fontFamily: "system-ui",
                    fill: "#ff8800",
                    fontSize: "21px",
                  }}
                >
                  {datesTraffic.length}
                </text>
              </Marker>