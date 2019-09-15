import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./components/CharacterCard.js";
import "./App.css";
// import CharacterList from "./components/CharacterList.js";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        const charData = response.data.results;
        // console.log(charData);
        setCharacters(charData);
      })
      .catch(error => {
        console.log("The data was not found", error);
      });
  }, []);

  console.log("after useEffect", characters);

  return (
    <div className="container">
      {characters.map(character => {
        return <CharacterCard name={character.name} />;
      })}
    </div>
  );
};

export default App;
