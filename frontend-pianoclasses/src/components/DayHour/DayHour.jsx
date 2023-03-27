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
import swal from "sweetalert";

let isCalendarLoaded = false;
var passArray = {id:1, title: "", start:"", end:""};


 function DayHour () {
    const [modalOpen, setModalOpen] = useState(false);
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false); //confirm pop up

    const onEventAdded = event => {

      event.start=moment(event.start).format("YYYY-MM-DD HH:mm:ss");
      event.end=moment(event.end).format("YYYY-MM-DD HH:mm:ss");
      // axios.post("http://localhost:8000/api/lessons", event);
      handleEventAdd(event);

      let calendarApi = calendarRef.current.getApi()
      calendarApi.addEvent({
        event
      });

      isCalendarLoaded = false;

    };
    
    async function handleEventAdd(data) {
      console.log(data)
      await axios.post("http://localhost:8000/api/lessons", data);
      passArray={id:1, title: "", start:"", end:""};
      swal("Success", "You have added a lesson to the calendar successfully!", "success");
    };

    async function handleDatesSet(data) {
      if (isCalendarLoaded===false) {
        const response = await axios.get("http://localhost:8000/api/lessons");
        setEvents(response.data);
        isCalendarLoaded = true;
        console.log("get calendar");
      }
    }


//opens prompt with lesson details
const handleSelect = (info) => {
  console.log(info.event);
  console.log(info.event.start);
  passArray= {id:1, title: info.event.title, start: moment(info.event.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.event.end).format("YYYY-MM-DD HH:mm:ss")};
  console.log(passArray);

  setIsOpen(true);
  // const eventNamePrompt = prompt( 
  //   "Piano lesson: " + info.title  \n  "Date: " + moment(info.start).format("ddd") + " " + moment(info.start).format("Do MMM YYYY") 
  //   + "Start time: " + moment(info.start).format("HH:mm") 
  //   + "End time: " + moment(info.end).format("HH:mm") + "Chopin" + 
  //    "Click OK to confirm this lesson"
  //   );

  // if (eventNamePrompt) {
  //  console.log("Need to set is_confirmed to true");
  // }
};

//this function opens the modal to add the lesson
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

  setModalOpen(true);
  passArray= {id:1, title: info.title, start: moment(info.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.end).format("YYYY-MM-DD HH:mm:ss")}

}
console.log(isOpen);


        return (
          <div className='calendar-container'>
            <div>
            <FullCalendar
            editable
            eventOverlap={false}
            selectable
          //  select={handleSelect}
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
              eventClick={(event) => handleSelect(event)}
              eventAdd={event => handleEventAdd(event)}
              datesSet={(date) => handleDatesSet(date)}
            />
            </div>
            <AddEventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventAdded={event => onEventAdded(event)} calValues={passArray} />

            {isOpen && (
            <div className="modal">
            <div className="modal-content">
              <h1>Lesson details</h1>
              <div>Student: {passArray.title}</div>
              <div>Date: {moment(passArray.start).format("ddd")} {moment(passArray.start).format("Do MMM YYYY")} </div>
              <div>Start Time: {moment(passArray.start).format("HH:mm")}</div>
              <div>End Time: {moment(passArray.end).format("HH:mm")}</div>
              <div>
                  <div>Do you want to confirm this class?</div>
                  <button onClick={() => setIsOpen(false)}>
                  No
                  </button> 
                  <button onClick={() => setIsOpen(false)}>
                  Yes
                  </button> 
              </div>
            </div>
            </div>
            )}

          </div>
        );
        };


        
export default DayHour;