import React from "react";
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export default function CalendarLegend () {

  return (
    <>
            
            <div className="legend-title"><p className="legend-title">Colour code: </p></div>
            <div className='legend'>
            <FontAwesomeIcon icon={faMusic} style={{color: "#f313f6",}} />
            </div>
            
           
          
    </>
  )
}
