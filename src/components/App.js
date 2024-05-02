import React, { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  // State to manage whether to show the toy form or not
  const [showForm, setShowForm] = useState(false);
  // State to store the list of toys
  const [toys, setToys] = useState([]);

  // Fetch toys data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToys);
  }, []);

  // Function to handle click on the "Add a Toy" button
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Function to add a new toy to the list of toys
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // Function to delete a toy from the list of toys
  function handleDeleteToy(toyToDelete) {
    const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(updatedToys);
  }

  // Function to update an existing toy in the list of toys
  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  return (
    <>
     {/* Render the Header component */}
     <Header />
      {/* Render ToyForm component if 'showForm' is true */}
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      {/* Button to toggle display of toy form */}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      {/* Render ToyContainer component with necessary props */}
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;

