import React  from 'react';
import '../../index.css';
import './DayHour.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import AddEventModal from './AddEventModal';
import ConfirmLesson from './ConfirmLesson';
import UpdateLesson from './UpdateLesson';
import { useRef } from 'react';
import moment from "moment";
import axios from 'axios';
import Swal from "sweetalert2";
import { getAxiosInstance } from '../../services/functions';

var instance = getAxiosInstance();
var isCalendarLoaded = false;
var passArray = {id:0, title: "", start:"", end:""};


function DayHour () {
    const [modalOpen, setModalOpen] = useState(false);
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false); //confirm pop up
    const [isUpdateOpen, setIsUpdateOpen] = useState(false); //confirm pop up
   
    const onEventAdded = event => {

      event.start=moment(event.start).format("YYYY-MM-DD HH:mm:ss");
      event.end=moment(event.end).format("YYYY-MM-DD HH:mm:ss");
      handleEventAdd(event);

      let calendarApi = calendarRef.current.getApi()
      calendarApi.addEvent({
        event
      });

      isCalendarLoaded = false;

    };
    
     async function handleEventAdd(data) {
      // console.log(data)
      await axios.post("http://localhost:8000/api/lessons", data);
    //    await instance.post('http://localhost:8000/api/lessons', data).then(res=> {
    //     console.log(`res.data.status: ${res.data}`);
    //     if(res.data.status === 200){

        Swal.fire({
          title: "Thank you for adding a lesson! An email has been sent to Gillian. You will receive an email when she has confirmed the lesson.",
          color: 'white',
          background: '#676060',
          showConfirmButton: true,
          confirmButtonColor: '#01FDFD',
          
      });
        isCalendarLoaded=false;
        passArray={id:0, title: "", start:"", end:""};
    //     } else {
    //       console.log("something didn't happen");
    //     }
        
    // })
    };

 
    async function handleDatesSet(data) {
      if (isCalendarLoaded===false) {
        // const response = await axios.get("http://localhost:8000/api/lessons");
        const response = await instance.get("http://localhost:8000/api/lessons");
        setEvents(response.data);
        eventState(events);
        isCalendarLoaded = true;
        // console.log("get calendar");
      }
      eventState(events);
    }
//set event colours and editable
function eventState (events) {

  for (let i = 0; i < events.length; i++) {
    //set default values on initializing
    events[i].editable=false;

    if (localStorage.role==="admin" || events[i].user_id===parseInt(localStorage.id)) {
      // console.log(events[i].user_id);
      if (events[i].is_confirmed===1) {
        events[i].editable=true;
        events[i].backgroundColor='#24037D';//dark blue
      };
      if (events[i].is_confirmed===0) {
        events[i].editable=true;
        events[i].backgroundColor='#FA1E9A';  // pink
      };
    } else {
      events[i].title=""; //hide other user info from current user unless admin
      events[i].backgroundColor='#676060'; //grey
    };

  }
}
//shows lesson details, allows teacher to confirm classes
const handleSelect = (info) => {
  passArray= {id: info.event.id, title: info.event.title, start: moment(info.event.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.event.end).format("YYYY-MM-DD HH:mm:ss")};
  setIsOpen(true);
  isCalendarLoaded=false;
};

//shows lesson details, allows teacher to confirm classes
const changeLesson = (info) => {
  passArray= {id: info.event.id, title: info.event.title, start: moment(info.event.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.event.end).format("YYYY-MM-DD HH:mm:ss")};
  setIsUpdateOpen(true);
  isCalendarLoaded=false;
};

//this function opens the modal to add the lesson
const openModal  = (info) => {
  const { start, end } = info;
  setEvents([
    ...events,
    {
      start,
      end,
    },
  ]);

  setModalOpen(true);
  passArray= {
    id: localStorage.getItem('id'), 
    title: localStorage.getItem('sname'), 
    start: moment(info.start).format("YYYY-MM-DD HH:mm:ss"), 
    end: moment(info.end).format("YYYY-MM-DD HH:mm:ss")
  }
// console.log(passArray);
isCalendarLoaded=false
}


// function changeLesson( info ) { 
//   alert(info.event.title + " was dropped on " + info.event.start.toISOString());

//   // if (!confirm("Are you sure about this change?")) {
//   //   info.revert();
//   //   revertFunc()
//   // }
// }
// function changeLesson (info)
// {console.log(info);
//   //  var day = info.start.format("dddd"); // this will give you day 
//   //  if(day === "Saturday")
//   if(info!==null)
//    {
//       alert("You can not move this event to saturday.");
//       info.revert();
//    } else {
//       //Here is my ajax to update DB
//    }
// } 
        return (
          <div className='calendar-container'>
            <div>
            <FullCalendar
            // editable={isEditable}
            eventOverlap={false}
            selectable
            //  select={handleSelect}
            select={openModal} //new function
            ref={calendarRef}
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
              // plugins= {[ 'interaction', 'dayGrid', 'timeGrid' ]}
            defaultView= 'timeGridWeek'
            allDaySlot={false}
            contentHeight={1000}
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
              //   // { title: 'unavailable', start: '2023-03-30 10:00:00' , end: '2023-03-30 15:00:00', backgroundColor: 'grey'},
              // ]}
              eventClick={(event) => handleSelect(event)}
              eventAdd={event => handleEventAdd(event)}
              datesSet={(date) => handleDatesSet(date)}
              eventDrop={(info) => changeLesson((info))}
              
            />
            </div>
            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} calValues={passArray} />

            {/** show details of selected event */}
            {isOpen && (
              // <ConfirmLesson isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventUpdate={event => onEventUpdate(event)} eValues={passArray} />
              <ConfirmLesson isOpen={isOpen} onClose={() => setIsOpen(false)} eValues={passArray} />
            )}
            {isUpdateOpen && (
              // <ConfirmLesson isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventUpdate={event => onEventUpdate(event)} eValues={passArray} />
              <UpdateLesson isOpen={isOpen} onClose={() => setIsOpen(false)} eValues={passArray} />
            )}

          </div>
        );
        };


        
export default DayHour;