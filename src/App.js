import './App.css';
import React, { useState, UseEffect, useEffect } from 'react';

import data from './data/data.json';

import FlightsTable from './components/FlightTable';

/*
1. load all data
2. divide data by arr/dep and thow away the unnecessary fields
3. extract from date converted to local time
4. design the Table component (prop is table of object)
5. implement Row component to represent single flight (take object of flight as prop)
6. in Table map through table and append Row for every flight
7. sort func (take field value to sort by) return new array of sorted obj
8. srting table of objects: handle click for table header specifying the sort option
9. investigate media query
*/

function App() {

  const [airportData, setAirportData] = useState([]);

  useEffect(() => {
    setAirportData(data);
  }, []);

  return (
    <React.Fragment>
        <div>
          <div className='wrapper'>
            <h1 className='header'>Arrivals</h1>
            <button>Departures</button>
          </div>
          <div className='flightsTable'>
            <FlightsTable flights={airportData} />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
