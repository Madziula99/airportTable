import './App.css';
import React, { useState, useEffect } from 'react';

import data from './data/data.json';

import FlightsTable from './components/FlightTable';

/*
1. load all data +
2. divide data by arr/dep and thow away the unnecessary fields +
3. extract from date converted to local time +
4. design the FlightTable component (pass array of objects) +
5. implement Row component to represent single flight (take object of flight as prop) +/-
6. in Table map through table and append Row for every flight +
7. sort func (take field value to sort by) return new array of sorted obj +
8. sort table of objects: handle click for table header specifying the sort option
9. investigate media query
*/

function App() {

  const [arrivals, setArrivals] = useState([]);
  const [departures, setDepartures] = useState([]);

  const [direction, setDirection] = useState('Arrivals')

  useEffect(() => {
    if(arrivals.length === 0 || departures.length === 0) {
      data.map((flight) => {
        if(flight.gate) setDepartures(current => [...current, flight]);
        else setArrivals(current => [...current, flight]);
        return null;
      })
    }
  }, [arrivals.length, departures.length]);

  function changeDirection() {
    direction === 'Arrivals' ? setDirection('Departures') : setDirection('Arrivals')
  }

  return (
    <React.Fragment>
        <div>
          <div className='wrapper'>
            <h1 className='header'>{direction}</h1>
            <button onClick={changeDirection}>{direction === 'Arrivals' ? 'Departures' : 'Arrivals'}</button>
          </div>
          <div className='flightsTable'>
            <FlightsTable flights={direction === 'Arrivals' ? arrivals : departures} direction={direction} />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
