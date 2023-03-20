import React from 'react';
import '../index.css';
import '../styles/authorizerUsers.css'
import { useState } from "react";

function Authorizer() {
    const [tableData, setTableData] = useState([]);

    function addRow() {
    const newRow = {
        id: tableData.length + 1,
        column1: '',
        column2: '',
        column3: '',
        column4: ''
    };
    setTableData([...tableData, newRow]);
    }

    return (
    <>
        <div id='container-father'>
            <div className='container'>
            <table>
            <thead>
                <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Authorized</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map(row => (
                    <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.column1}</td>
                    <td>{row.column2}</td>
                    <td>{row.column3}</td>
                    <td>{row.column4}</td>
                </tr>
                ))}
            </tbody>
            </table>
            {/* <button onClick={addRow}>Agregar fila</button> */}
        </div>
        </div>
    </>
    )
  }
  
  export default Authorizer;
  