import React from "react";

const CharacterCard = props => {
  // console.log(props);
  const { name, height, mass } = props.characters;
  return (
    <div className="char-card">
      <h2>Name: {name}</h2>
      <p>Height: {height} cm</p>
      <p>Mass: {mass} kg</p>
    </div>
  );
};

export default CharacterCard;
