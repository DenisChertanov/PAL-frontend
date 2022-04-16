import React from "react";

import "./css/AnimeCharacteristic.css";

function AnimeCharacteristic({ characteristicKey, characteristicValue }) {
  return (
    <div className="anime-characteristic">
      <h1 className="anime-characteristic-key">{characteristicKey}</h1>
      <h1 className="anime-characteristic-value">{characteristicValue}</h1>
    </div>
  );
}

export default AnimeCharacteristic;
