import React, {useState, useEffect} from "react";

import Accordion from './components/accordion/accordion.jsx';
import CTAGrid from './components/cta-grid/cta-grid.jsx';

import './App.min.css';

function App() {

  const [beers, setBeers] = useState(null);
  const [data, setData] = useState(beers);
  const [sortType, setSortType] = useState('name');

  useEffect(() => {
    getBeers();

    async function getBeers() {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const data = await response.json();
  
      setBeers(data);
    }
  }, [])

  useEffect(() => {
    const checkArray = Array.isArray(beers)

    const sortByName = sortProperty => (a, b) => {
        if (a[sortProperty] < b[sortProperty]) {return -1;}
        if (a[sortProperty] > b[sortProperty]) {return 1;}
        return 0;
    }

    const newBeersArray = checkArray && ([...beers]);
  
    const sortArray = type => {
      const types = {
        name: 'name',
        abv: 'abv',
      };
      const sortProperty = types[type];
      const sorted = checkArray ? sortProperty === 'name' ? newBeersArray.sort(sortByName(sortProperty)) : newBeersArray.sort((a, b) => (a[sortProperty] - b[sortProperty])) : null
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType, beers]); 

  return (
    <div className="app">
        <h1 className="app__title">BrewDog Beers</h1>

        <div className="app__section">
          <h2 className="app__subtitle">Accordion</h2>
          <Accordion data={beers} />
        </div>

        <div className="app__section">
          <h2 className="app__subtitle">CTA Grid</h2>
          <select className="app__filter" onChange={(e) => setSortType(e.target.value)}>
              <option value="name">Name</option>
              <option value="abv">ABV</option>
          </select>
          <CTAGrid data={data} />
        </div>
    </div>
  );
}

export default App;
