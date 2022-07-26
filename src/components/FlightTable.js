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
                <tr onClick={(e) => sortFlights(flights, e.target.title)}>
                    <th className="fnrApname" title="fnr">Flight Number,<br/>Airport Name</th>
                    <th className="fnr" title="fnr">Flight Number</th>
                    <th className="apname" title="apname">Airport Name</th>
                    <th className="sched" title="sched">Time</th>
                    {(direction==='Departures') ? <th className="gate" title="gate">Gate</th> : null}
                    <th className="status" title="status">Status</th>
                    <th className="terminal" title="terminal">Terminal</th>
                    <th className="term" title="terminal">Term.</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flightInfo, i) => {
                    return (
                    <tr key={i}>
                        <td className="fnrApname">{flightInfo.fnr}<br/>{flightInfo.apname}</td>
                        <td className="fnr">{flightInfo.fnr}</td>
                        <td className="apname">{flightInfo.apname}</td>
                        <td className="sched">{readableDate(flightInfo.sched)}</td>
                        {(direction==='Departures') ? <td className="gate">{flightInfo.gate}</td> : null}
                        <td className="status">{flightInfo.status.toLowerCase()}</td>
                        <td className="terminal">{flightInfo.terminal}</td>
                    </tr>
                    )
                })}
            </tbody>
            {(listChange.length === 0) ? null : null}
        </table>
      )
}

export default FlightsTable;