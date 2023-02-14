import React from "react";
import './styles.css'

export default function tableGrid() {
  return (
    <div className="table">
      <div class="table-header">
        <h3 class="table-title">Status</h3>
        <h3 class="table-title">Serveur</h3>
        <h3 class="table-title">Version</h3>
      </div>

      <div class="table-results">
        <div class="table-item">
          <p class="Status">Status</p>
          <p class="Serveur">Serveur</p>
          <p class="Version">Version</p>
        </div>

        <div class="table-item">
          <p class="Status">Status2</p>
          <p class="Serveur">Serveur2</p>
          <p class="Version">Version2</p>
        </div>
      </div>
    </div>
  );
}
