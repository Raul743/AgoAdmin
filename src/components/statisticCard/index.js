import React from "react";
import "./style.css";

export default function StatisticCard(props) {
  return (
    <>
      <div className="libongo-statistic-card">
        <button className="libongo-statistic-card-fisrt">
          <h3>Membros Activos</h3>
          <span>Média Diária de Activos</span>
          <h2>0</h2>
        </button>
        <button className="libongo-statistic-card-second">
          <h3>Total de Membros</h3>
          <span>Novos Membros</span>
          <h2>1</h2>
        </button>
      </div>
    </>
  );
}
