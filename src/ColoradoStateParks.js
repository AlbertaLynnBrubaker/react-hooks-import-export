import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  const trees = RMFunctions.Trees;


  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <h2>Rocky Mountain National Park</h2>
      <p>{trees}</p>
      <RMFunctions.Wildlife />
      <RMFunctions.Elevation />
    </div>
  )
}

export default ColoradoStateParks;
