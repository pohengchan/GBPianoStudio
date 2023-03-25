import React  from 'react';
import '../../index.css';
import './DayHour.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import AddEventModal from './AddEventModal';
import { useRef } from 'react';
import moment from "moment";
import axios from 'axios';



let isCalendarLoaded = false;
var passArray = {id:1, title: "", start:"", end:""};

 function DayHour () {
    const [modalOpen, setModalOpen] = useState(false);
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [newInfo, setNewInfo] = useState([]);

    const onEventAdded = event => {
      console.log(`adding a new lesson: ${event.start}`);
      console.log(event.start);
      event.start=moment(event.start).format("YYYY-MM-DD HH:mm:ss");
      event.end=moment(event.end).format("YYYY-MM-DD HH:mm:ss");
      console.log(event);
      axios.post("http://localhost:8000/api/lessons", event);
      //handleEventAdd(event);

      // let calendarApi = calendarRef.current.getApi()
      // calendarApi.addEvent({
      //   event
      // });

      isCalendarLoaded = false;

    };


    
    async function handleEventAdd(data) {
      console.log(data)
      await axios.post("http://localhost:8000/api/lessons", data);
    };

    async function handleDatesSet(data) {
      if (isCalendarLoaded===false) {
        const response = await axios.get("http://localhost:8000/api/lessons");
        setEvents(response.data);
        isCalendarLoaded = true;
      }

      console.log("get calendar");
    }
    
const handleSelect = (info) => {
  const { start, end } = info;
  const eventNamePrompt = prompt( "Piano lesson: " + moment(info.start).format("ddd") + " " + moment(info.start).format("Do MMM YYYY") + ", from " + moment(info.start).format("HH:mm") + " to " + moment(info.end).format("HH:mm"), "Chopin");
  if (eventNamePrompt) {
    setEvents([
      ...events,
      {
        start,
        end,
        title: eventNamePrompt,
        // id: uuid(),
      },
    ]);
  }
  handleEventAdd({user_id:1, title: eventNamePrompt, start: moment(info.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.end).format("YYYY-MM-DD HH:mm:ss")});
  console.log(moment(info.start).format("YYYY-MM-DD hh:mm:ss"));
  console.log(moment(info.end).format("YYYY-MM-DD hh:mm:ss"));
//need to get user ID
//need to get user Name
};

const openModal  = (info) => {
  const { start, end } = info;
  setEvents([
    ...events,
    {
      start,
      end,
      title:"",
    },
  ]);
  // parentToChild();ç

  setModalOpen(true);
  console.log(`ìnfo is ${info}`);
  console.log(moment(info.start).format("YYYY-MM-DD hh:mm:ss"));

  passArray= {id:1, title: info.title, start: moment(info.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.end).format("YYYY-MM-DD HH:mm:ss")}

  return {id:1, title: info.title, start: moment(info.start).format("YYYY-MM-DD hh:mm:ss"), end: moment(info.end).format("YYYY-MM-DD hh:mm:ss")};

}
// const parentToChild = (info) => {
//   const { start, end } = info;
//   setEvents([
//     ...events,
//     {
//       id: 1,
//       start,
//       end,
//       title:"",
//     },
//   ]);
//   //setNewInfo({user_id:1, title:"title",start:"2023-03-24 14:00:00",end:"2023-03-24 15:00:00"});
//   console.log(`new info: ${events}`);
//   console.log(events);
//   setModalOpen(true);
// }
        return (
            
          <div className='calendar-container'>
            <div><p>Calendar</p></div>
            <div>
            <FullCalendar
            editable
            selectable
          //  select={handleSelect}
          // select={parentToChild}
          select={openModal} //new function
          ref={calendarRef}
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
              // plugins= {[ 'interaction', 'dayGrid', 'timeGrid' ]}
            defaultView= 'timeGridWeek'
            allDaySlot={false}
            contentHeight={600}
            slotMinTime={"09:00:00"}
            slotMaxTime={"21:00:00"}
            slotDuration={"00:30:00"}
            hiddenDays={[0]} //hide Sunday
              // defaultDate= '2019-08-15'
            slotEventOverlap={false}
              headerToolbar= {{
                left: 'prev,next,today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              events={events}
              // events={[
              //   this.state.events
              //   // { title: 'unavailable', start: '2023-03-13T10:00:00' , end: '2023-03-13T15:00:00', backgroundColor: 'grey'},
              // ]}
              eventAdd={event => handleEventAdd(event)}
              datesSet={(date) => handleDatesSet(date)}
            />
            </div>
            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} parentToChild={passArray}  />
            {/* <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} onOpen={() => parentToChild()} parentToChild={{user_id:1, title:"title",start:"2023-03-24 14:00:00",end:"2023-03-24 15:00:00"}} /> */}
          </div>
        );
            };
    // };
export default DayHour;