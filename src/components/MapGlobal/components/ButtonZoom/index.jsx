import React from "react";
import './style.css'

export default function ButtonZoom({zoomEffects, children}) {
  return (
    <button onClick={() => zoomEffects}>
        {children}
    </button>
  );
}
