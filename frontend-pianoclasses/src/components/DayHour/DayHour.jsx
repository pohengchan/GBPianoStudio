import React  from 'react';
import '../../index.css'
import './DayHour.css';
import FullCalendar from "@fullcalendar/react";
//mport { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function DayHour() {

  const [events, setEvents] = useState([]);
  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name" + info );
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };
    // var calendarEl = document.getElementById('calendar');
  
    // var calendar = new FullCalendar.Calendar(calendarEl, {
    //   plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    //   defaultView: 'timeGridDay',
    //   defaultDate: '2019-08-15',
    //   slotEventOverlap: false,
    //   header: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
    //   },
    //   events: [
    //   {
    //     "title": "Generic Event Title",
    //     "start": "2019-08-15T06:30:00",
    //     "end": "2019-08-15T17:30:00"
    //   },
    
    // ]
    // });
  
    // calendar.render();


    

        return (
            
          <div>
            <div><p>Calendar</p></div>
            <div>
            <FullCalendar
            editable
            selectable
            //events={events}
            select={handleSelect}
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
              // plugins= {[ 'interaction', 'dayGrid', 'timeGrid' ]}
            defaultView= 'timeGridWeek'
            allDaySlot={false}
            contentHeight={600}
            slotMinTime={"09:00:00"}
            slotMaxTime={"21:00:00"}
            slotDuration={"00:15:00"}
            hiddenDays={[0]} //hide Sunday
              // defaultDate= '2019-08-15'
              // slotEventOverlap= false
              // headerToolbar= {{
              //   left: 'prev,next today',
              //   center: 'title',
              //   right: 'dayGridMonth,timeGridWeek,timeGridDay'
              // }}
              events={[
                { title: 'unavailable', start: '2023-03-13T10:00:00' , end: '2023-03-13T15:00:00', backgroundColor: 'grey'},
                { title: 'unavailable', start: '2023-03-14T10:00:00' , end: '2023-03-14T15:15:00', backgroundColor: 'grey'},
                { title: 'unavailable', start: '2023-03-15T10:00:00' , end: '2023-03-15T14:15:00', backgroundColor: 'grey'},
                { title: 'unavailable', start: '2023-03-16T10:00:00' , end: '2023-03-16T15:15:00', backgroundColor: 'grey'},
                { title: 'unavailable', start: '2023-03-17T10:00:00' , end: '2023-03-17T14:15:00', backgroundColor: 'grey'},
                { title: 'unavailable', start: '2023-03-18T09:00:00' , end: '2023-03-18T21:00:00', backgroundColor: 'grey'},
              ]}
              
            />
            </div>
          </div>
        );

    };
export default DayHour;


        {/* <div><p>Calendar</p></div>
        <div className='calendar'>
            <div className='timeline'>
                <div><p>9 AM</p></div>
                <div><p>10 AM</p></div>
                <div><p>11 AM</p></div>
                <div><p>12 PM</p></div>
                <div><p>1 PM</p></div>
                <div><p>2 PM</p></div>
                <div><p>3 PM</p></div>
                <div><p>4 PM</p></div>
                <div><p>5 PM</p></div>
                <div><p>6 PM</p></div>
                <div><p>7 PM</p></div>
                <div><p>8 PM</p></div>
                <div><p>9 PM</p></div>
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
            <div className='day'>
                <div className='date'>
                    <p className='date-num'>14</p>
                    <p className='date-day'>Sat</p>
                </div>
                <div className='events'>
                    <div className='event start-9 end-9 unavailable'>
                        <p className='book'>unavailable</p>
                        <p className='book'>9:00-21:00</p>
                    </div>
                </div>  
            </div> 
        </div>
  </div>  */}


