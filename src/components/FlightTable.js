import React from "react";
import './flightTable.css';

function readableDate(isoDate) {
    let dateFormat = new Date(isoDate);

    let h = dateFormat.getHours();
    let m = dateFormat.getMinutes();

    let foo = String(h) + ':' + (dateFormat.getMinutes()<10?'0':'') + + String(m);
    
    return foo
}

const FlightsTable = ({flights}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Airport Name</th>
                    <th>Flight Number</th>
                    <th>Gate</th>
                    <th>Scheduled Time</th>
                    <th>Status</th>
                    <th>Terminal</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flightInfo, i) => {
                    return (
                    <tr key={i}>
                        <td>{flightInfo.apname}</td>
                        <td>{flightInfo.fnr}</td>
                        <td>{flightInfo.gate}</td>
                        <td>{readableDate(flightInfo.sched)}</td>
                        <td>{flightInfo.status}</td>
                        <td>{flightInfo.terminal}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
      )
}

export default FlightsTable;