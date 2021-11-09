import React, {useState, useEffect} from "react";

import Accordion from './components/accordion/accordion.jsx';

import './App.min.css';

function App() {

  const [beers, setBeers] = useState(null);

  useEffect(() => {
    getBeers();

    async function getBeers() {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const data = await response.json();
  
      setBeers(data);
    }
  }, [])

  return (
    <div className="app">
        <h1 className="app__title">BrewDog Beers</h1>

        <div className="app__section">
          <h2 className="app__subtitle">Accordion</h2>
          <Accordion data={beers} />
        </div>
    </div>
  );
}

export default App;
