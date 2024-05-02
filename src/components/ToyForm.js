import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  // Function to handle input change
  function handleChange(event) {
    // Update formData with the new value
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Create a new toy object with form data and initial likes count
    const newToy = {
      ...formData,
      likes: 0,
    };

    // Send POST request to add the new toy to the server
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((r) => r.json())
      .then(onAddToy); // Call onAddToy function to update the UI with the new toy
  }

  return (
    <div className="container">
      {/* Toy form */}
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        {/* Input for toy name */}
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        {/* Input for toy image URL */}
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        {/* Submit button */}
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
