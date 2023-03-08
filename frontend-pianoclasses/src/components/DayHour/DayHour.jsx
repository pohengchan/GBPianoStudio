import React from 'react';
import '../../index.css'
import './DayHour.css';


function DayHour() {
    
 
    return (
    <>
<div className='container'>
    <div className='calendar'>
        <div className='timeline'>
            <div className='spacer'></div>
            <div className='time-marker'>9 AM</div>
            <div className='time-marker'>10 AM</div>
            <div className='time-marker'>11 AM</div>
            <div className='time-marker'>12 PM</div>
            <div className='time-marker'>1 PM</div>
            <div className='time-marker'>2 PM</div>
            <div className='time-marker'>3 PM</div>
            <div className='time-marker'>4 PM</div>
            <div className='time-marker'>5 PM</div>
            <div className='time-marker'>6 PM</div>
            <div className='time-marker'>7 PM</div>
            <div className='time-marker'>8 PM</div>
            <div className='time-marker'>9 PM</div>
        </div>
                
        <div className='days'>
            <div className='day'>
                <div className='date'>
                    <p className='date-num'>9</p>
                    <p className='date-day'>Mon</p>
                </div>
                <div className='events'>
                    <div className='event start-2 end-3 available'>
                    <p className='book'>Book</p>
                    <p className='book'>2:00-3:00</p>
                    </div>
                </div>
            </div>
            <div className='day'>
            <div className='date'>
                <p className='date-num'>10</p>
                <p className='date-day'>Tues</p>
            </div>
            <div className='events'>
                <div className='event start-10 end-11 available'>
                <p className='book'>Book</p>
                <p className='book'>10:00-11:00</p>
                </div>
                <div className='event start-1 end-2 available'>
                <p className='book'>Book</p>
                <p className='book'>1:00-2:00</p>
                </div>
            </div>
            </div>
            <div className='day'>
            <div className='date'>
                <p className='date-num'>11</p>
                <p className='date-day'>Wed</p>
            </div>
            <div className='events'>
                <div className='event start-12 end-1 available'>
                <p className='book'>Book</p>
                <p className='book'>12:00-1:00</p>
                </div>
                <div className='event start-2 end-3 available'>
                <p className='book'>Book</p>
                <p className='book'>2:00-3:00</p>

                </div>
            </div>
            </div>
            <div className='day'>
            <div className='date'>
                <p className='date-num'>12</p>
                <p className='date-day'>Thurs</p>
            </div>
            <div className='events'>
                <div className='event start-10 end-11 available'>
                    <p className='book'>Book</p>
                    <p className='book'>10:00-11:00</p>
                </div>
                <div className='event start-1 end-2 available'>
                    <p className='book'>Book</p>
                    <p className='book'>1:00-2:00</p>
                </div>
            </div>
            </div>
            <div className='day'>
            <div className='date'>
                <p className='date-num'>13</p>
                <p className='date-day'>Fri</p>
            </div>
            <div className='events'>
                <div className='event start-11 end-12 available'>
                    <p className='book'>Book</p>
                    <p className='book'>11:00-12:00</p>
                </div>
                <div className='event start-12 end-1 available'>
                    <p className='book'>Book</p>
                    <p className='book'>12:00-1:00</p>
                </div>
                <div className='event start-3 end-4 available'>
                    <p className='book'>Book</p>
                    <p className='book'>3:00-4:00</p>
                </div>
                <div className='event start-5 end-6 pending'>
                    <p className='book'>To be confirmed</p>
                    <p className='book'>5:00-6:00</p>
                </div>
            </div>
            </div>
        </div>
  </div>
  </div>

    </>
  )
}

export default DayHour