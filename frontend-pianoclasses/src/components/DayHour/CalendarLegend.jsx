import React from "react";
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export default function CalendarLegend () {

  return (
    <>
            
        <div><p className="legend-title">Colour code: </p></div>
        <div className='legend'>
            <div className='legend'>
                <FontAwesomeIcon className='legend-icon i-blue' icon={faMusic} style={{color: "white",}} />
                <p className='legend-p'>Confirmed</p>
            </div>
            <div className='legend'>
                <FontAwesomeIcon className='legend-icon i-pink' icon={faMusic} style={{color: "white",}} />
                <p className='legend-p'>To be confirmed</p>
            </div>
            <div  className='legend'>
                <FontAwesomeIcon className='legend-icon i-grey' icon={faMusic} style={{color: "white",}} />
                <p className='legend-p'>Unavailable</p>
            </div>
        </div>
    </>
  )
}
