import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";
import CharacterCard from "./components/CharacterCard.js";
import Header from "./components/Header.js";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        const charData = response.data.results;
        // console.log("pagination", response.data);
        // console.log("charData", charData);
        setCharacters(charData);
        // console.log("next", response.data.next);
        const nextPage = response.data.next;
        setNext(nextPage);
        console.log("next page", nextPage);
      })
      .catch(error => {
        console.log("The data was not found", error);
      });
  }, []);

  // console.log("after useEffect", characters);

  return (
    <div className="main">
      <Header />
      <div className="container">
        {characters.map(character => {
          return <CharacterCard key={uuid()} characters={character} />;
        })}
      </div>
      <p>Next {}</p>
    </div>
  );
};

export default App;
