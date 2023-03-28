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
import { useRef } from 'react';
import moment from "moment";
import axios from 'axios';
import swal from "sweetalert";
import { getAxiosInstance } from '../../services/functions';

var instance = getAxiosInstance();

let isCalendarLoaded = false;
var passArray = {id:0, title: "", start:"", end:""};



function DayHour () {
    const [modalOpen, setModalOpen] = useState(false);
    const calendarRef = useRef(null);
    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false); //confirm pop up
    // const [objectData, setObjectData] = useState(null); //get selected event's data


   
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
      // console.log(data)
      await axios.post("http://localhost:8000/api/lessons", data);
    //    await instance.post('http://localhost:8000/api/lessons', data).then(res=> {
    //     console.log(`res.data.status: ${res.data}`);
    //     if(res.data.status === 200){

    //     // swal("Success",res.data.message,"success");
        swal("Success", "Thank you for adding a lesson! An email has been sent to Gillian. You will receive an email when she has confirmed the lesson.", "success");
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
        isCalendarLoaded = true;
        console.log("get calendar");
      }
    }


//shows lesson details, allows teacher to confirm classes
const handleSelect = (info) => {
  // const objectData = getObjectDataById(info.event.id);
  // console.log(objectData);

  passArray= {id: info.event.id, title: info.event.title, start: moment(info.event.start).format("YYYY-MM-DD HH:mm:ss"), end: moment(info.event.end).format("YYYY-MM-DD HH:mm:ss")};

  setIsOpen(true);
};

//using event id "info.event.id" get is_confirmed value    
// function getObjectDataById(id) {
//     // useEffect(() => {
//     async function fetchData() {
//       try {
//         // const response = await axios.get(`/api/objects/${id}`);
//         const response = await instance.get(`http://localhost:8000/api/lesson/${id}`);
//         setObjectData(response.data);
//         console.log(response.data)//this works
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchData();
//   // }, [id]);
//   // console.log(objectData);
//   // console.log( objectData.is_confirmed);
//   // console.log( selectID);
//    return objectData.is_confirmed;
// }


// need to set is confirmed value
function handleConfirm() {
  // do something when the user confirms
  //set the is_confirmed field to 1 in the lessons table
  setIsOpen(false);
}

function handleCancelConfirm() {
  // do something when the teacher cancels instead of confirms the lesson
  //delete the lesson and send an email to the user of the action taken.

  setIsOpen(false);
}

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
console.log(passArray);
}
// console.log(isOpen);


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

            {/** show details of selected event */}
            {isOpen && (
              // <ConfirmLesson isOpen={modalOpen} onClose={() => setModalOpen(false)} onEventUpdate={event => onEventUpdate(event)} eValues={passArray} />
              <ConfirmLesson isOpen={isOpen} onClose={() => setIsOpen(false)} eValues={passArray} />
            )}

          </div>
        );
        };


        
export default DayHour;