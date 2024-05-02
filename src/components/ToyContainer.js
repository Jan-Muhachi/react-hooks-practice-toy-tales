import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  // Map each toy to a ToyCard component
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id} 
      toy={toy} 
      onDeleteToy={onDeleteToy} 
      onUpdateToy={onUpdateToy} 
    />
  ));

  // Render a div containing all the ToyCard components
  return <div id="toy-collection">{toyCards}</div>;
}

export default ToyContainer;
