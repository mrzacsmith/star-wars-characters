import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  return (
    <div>
      <h3>Character List</h3>
      {props.map(name => {
        return <CharacterCard name={name.name} />;
      })}
    </div>
  );
};

export default CharacterList;
