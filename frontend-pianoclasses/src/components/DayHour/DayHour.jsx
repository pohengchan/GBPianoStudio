import React  from 'react';
import '../../index.css';
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
import Swal from "sweetalert2";
import { getAxiosInstance } from '../../services/functions';

var instance = getAxiosInstance();

var passArray = {id:0, title: "", start:"", end:""};

const today = Date.now();
var minStart = moment(today).add(24, 'HH').toDate();
minStart = moment(minStart).format("YYYY-MM-DD HH:mm:ss");


function DayHour () {
    const [modalOpen, setModalOpen] = useState(false);
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false); //confirm pop up
    const [isUpdateOpen, setIsUpdateOpen] = useState(false); //confirm pop up
    const [loadCalendar, setLoadCalendar] = useState(true);
   
    const onEventAdded = event => {

      event.start=moment(event.start).format("YYYY-MM-DD HH:mm:ss");
      event.end=moment(event.end).format("YYYY-MM-DD HH:mm:ss");
      handleEventAdd(event);

      let calendarApi = calendarRef.current.getApi()
      calendarApi.addEvent({
        event
      });

      setLoadCalendar(true);
    };
    
    async function handleEventAdd(data) {
      await instance.post(`/api/lessons`, data);
  //    await instance.post('http://localhost:8000/api/lessons', data).then(res=> {

      Swal.fire({
        position: 'center',
        title: 'Lesson added',
        text: 'Thank you for adding a lesson! Please check your calendar in 24hrs to see if Gillian has confirmed the lesson.',
        confirmButtonText: 'OK',
        color: 'white', 
        background: '#676060', 
        confirmButtonColor: 'black', 
        customClass: {
          confirmButton: 'custom-button-class confirm-button'
        },
        buttonsStyling: false,
      }) 

      setLoadCalendar(true);
      passArray={id:0, title: "", start:"", end:""};

  };

 
async function handleDatesSet(data) {
  if (loadCalendar===true) {
    const response = await instance.get(`/api/lessons`);
    setEvents(response.data);
    eventState(events);
    setLoadCalendar(false);
  }
  eventState(events);
}
//set event colours and editable
function eventState (events) {

  for (let i = 0; i < events.length; i++) {
    //set default values on initializing
    events[i].editable=false;
    events[i].durationEditable=false;

    if (localStorage.role==="admin" || events[i].user_id===parseInt(localStorage.id)) {
      if (events[i].is_confirmed===1) {
        events[i].editable=true;
        events[i].durationEditable=false;
        events[i].backgroundColor='rgb(71, 71, 251)';//dark blue
      };
      if (events[i].is_confirmed===0) {
        events[i].editable=true;
        events[i].durationEditable=false;
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
  setLoadCalendar(true);
};

//shows update modal for user to change their lesson time
const changeLesson = (info) => {
  passArray= {id: info.event.id, title: info.event.title, start: moment(info.event.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.event.end).format("YYYY-MM-DD HH:mm:ss")};
  setIsUpdateOpen(true);
  setLoadCalendar(true);
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
  // check if the lesson is after 24hrs 
  if (moment(start).format("YYYY-MM-DD HH:mm:ss") > minStart) {

    setModalOpen(true);
    passArray= {
      id: localStorage.getItem('id'), 
      title: localStorage.getItem('sname'), 
      start: moment(info.start).format("YYYY-MM-DD HH:mm:ss"), 
      end: moment(info.end).format("YYYY-MM-DD HH:mm:ss")
    }

    setLoadCalendar(true);
  } else {

  Swal.fire({
    position: 'center',
    title: 'Lesson not booked',
    text: 'Sorry! You cannot book a lesson with less than 24hr notice.',
    confirmButtonText: 'OK',
    color: 'white', 
    background: '#676060', 
    confirmButtonColor: 'black', 
    customClass: {
      confirmButton: 'custom-button-class confirm-button'
    },
    buttonsStyling: false,
  }) 
  }
}

function onUpdateClose () {
  setLoadCalendar(true);
  setIsUpdateOpen(false);
}

        return (
          <div className='calendar-container'>
            <div>
            <FullCalendar
            eventOverlap={false}
            eventDurationEditable={false}
            selectable
            select={openModal} //new function
            ref={calendarRef}
            plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
            defaultView= 'timeGridWeek'
            allDaySlot={false}
            contentHeight={1000}
            slotMinTime={"09:00:00"}
            slotMaxTime={"21:00:00"}
            slotDuration={"00:30:00"}
            hiddenDays={[0]} //hide Sunday
            slotEventOverlap={false}
              headerToolbar= {{
                left: 'prev,next,today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              events={events}
              eventClick={(event) => handleSelect(event)}
              eventAdd={event => handleEventAdd(event)}
              datesSet={(date) => handleDatesSet(date)}
              eventDrop={(info) => changeLesson((info))}
              updateSize={true}
              
              
            />
            </div>
            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} calValues={passArray} />

            {/** show details of selected event */}
            {isOpen && (           
              <ConfirmLesson isOpen={isOpen} onClose={() => setIsOpen(false)} eValues={passArray} />
            )}
            {isUpdateOpen && (
              <UpdateLesson isOpen={isUpdateOpen} onClose={() => onUpdateClose()} eValues={passArray} />
            )}

          </div>
        );
        };


        
export default DayHour;