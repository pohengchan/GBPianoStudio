import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import Datetime from "react-datetime"
import './DayHour.css';

// import moment from "moment";

export default function AddEventModal ({isOpen, onClose, onEventAdded, parentToChild}) {
    console.log(`start: ${parentToChild.start}`);
    // console.log(data.start);
    // console.log(`data: ${data.start}`);
     console.log(`end: ${parentToChild.end}`);
    
    const [title, setTitle] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    // const [calDate, setCalDate] = useState(new Date());

     // effect runs on component mount
     useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setStart(parentToChild.start), 1000);
        setTimeout(() => setEnd(parentToChild.end), 1000);
    });

    const onSubmit = (event) => {
        console.log(`add class: ${event.start}`);
        event.preventDefault();
        onEventAdded({
            user_id:1,
            title,
            start ,
            end 
        })

        console.log(`wtf3: ${start}`);
        console.log(event.start);
        onClose();
    }

    const customStyles = {
        // content : {
        //   ...
        // },
        overlay: {zIndex: 1000}
      };

    return (
        <Modal style={customStyles} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} >
            <form  className="add-event-modal" onSubmit={onSubmit}>
                <label>Student's name</label>
                <input placeholder="Anna" value={title} onChange={e => setTitle(e.target.value)} />
                <div>
                    <label>Start Date</label>
                    {/* <Datetime value={parentToChild.start} onChange={date => setStart(date)} /> */}
                    <Datetime initialValue={parentToChild.start} value={start} onChange={date => setStart(date)}/>

                    {/* <input type="date" id="calDate" value = {calDate} onChange={e => setCalDate(e.target.value)} />
                    <label>Start Time</label>
                    <input type="time" id="sTime" min="09:00" max="20:30" value={start} onChange={e => setStart(`2023-03-25 {e.target.value}`)} /> */}
                    {/* <input type="time" value={start} onChange={e => setStart(e.target.value)} /> */}
                    {/* <Datetime value={start} onChange={date => setStart(date)} /> */}
                </div>
                <div>
                    <label for="duration">Choose the class duration: </label>

                    <select name="duration" id="duration">
                        <option value="30mins">30 mins</option>
                        <option value="45mins">45 mins</option>
                        <option value="60mins">60 mins</option>
                    </select>
                    {/* <Datetime value={end} onChange={date => setEnd(date)} /> */}
                </div>
                <div>
                    <label>End Time</label>
                    <Datetime initialValue={parentToChild.end} value={end} onChange={date => setEnd(date)} />
                    {/* <input type="time" id="eTime" value={end} onChange={e => setEnd(`2023-03-25 {e.target.value}`)}/> */}
                    {/* <input type="time" value={end} onChange={e => setEnd(e.target.value)} />
                    <Datetime value={end} onChange={date => setEnd(date)} /> */}
                </div>
                <div className="modal-buttons">
                    {/* <button >Cancel</button> */}
                    <button  >Add Lesson</button>                    
                </div>

            </form>
        </Modal>
    )
}