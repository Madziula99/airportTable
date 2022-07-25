import React, { useState } from "react";
import './flightTable.css';

function readableDate(isoDate) {
    let dateFormat = new Date(isoDate);

    let h = dateFormat.getHours();
    let m = dateFormat.getMinutes();

    let foo = String(h) + ':' + (dateFormat.getMinutes()<10?'0':'') + + String(m);

    return foo
}


const FlightsTable = ({flights, direction}) => {
    const [listChange, setListChange] = useState([])

    function dynamicSort(property) {
        return function (a,b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result;
        }
    }

    function sortFlights(flights, property) {
        flights.sort(dynamicSort(property));
        setListChange([...flights]);
    }


    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => sortFlights(flights, 'fnr')}>Flight Number</th>
                    <th onClick={() => sortFlights(flights, 'apname')}>Airport Name</th>
                    <th onClick={() => sortFlights(flights, 'sched')}>Time</th>
                    {(direction==='Departures') ? <th onClick={() => sortFlights(flights, 'gate')}>Gate</th> : null}
                    <th onClick={() => sortFlights(flights, 'status')}>Status</th>
                    <th onClick={() => sortFlights(flights, 'terminal')}>Terminal</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flightInfo, i) => {
                    return (
                    <tr key={i}>
                        <td>{flightInfo.fnr}</td>
                        <td>{flightInfo.apname}</td>
                        <td>{readableDate(flightInfo.sched)}</td>
                        {(direction==='Departures') ? <td>{flightInfo.gate}</td> : null}
                        <td>{flightInfo.status.toLowerCase()}</td>
                        <td>{flightInfo.terminal}</td>
                    </tr>
                    )
                })}
            </tbody>
            {(listChange.length === 0) ? null : null}
        </table>
      )
}

export default FlightsTable;