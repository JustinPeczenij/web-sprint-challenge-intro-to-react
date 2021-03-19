import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'

import axios from 'axios';
import Character from './components/Character'
// import { set } from 'msw/lib/types/context';

const StyledH1 = styled.h1 `
  font-size: 4rem;
  color: lime;
  font-family: 'Chango', cursive;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/?page=1')
      .then(res => {
        console.log(res.data)
        setCharacters(res.data)
      })
      .catch(err => {
        debugger;
      })
    }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App" style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
      <StyledH1 className="Header">REACT WARS/></StyledH1>
        {
          characters.map(character => {
            return <Character key={character.name} details={character} />
          })
        }
    </div>
  );
}

export default App;
