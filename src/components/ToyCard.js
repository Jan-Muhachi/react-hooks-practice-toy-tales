import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  // Destructuring toy object
  const { id, name, image, likes } = toy;

  // Function to handle toy deletion
  function handleDeleteClick() {
    // Send DELETE request to remove the toy from the server
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        // Update the UI by removing the deleted toy
        onDeleteToy(toy);
      });
  }

  // Function to handle toy like increment
  function handleLikeClick() {
    // Prepare data for updating likes
    const updateObj = {
      likes: toy.likes + 1,
    };

    // Send PATCH request to update likes count for the toy
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card">
      {/* Toy name */}
      <h2>{name}</h2>
      {/* Toy image */}
      <img src={image} alt={name} className="toy-avatar" />
      {/* Likes count */}
      <p>{likes} Likes </p>
      {/* Button to like the toy */}
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      {/* Button to delete the toy */}
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
