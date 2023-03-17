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