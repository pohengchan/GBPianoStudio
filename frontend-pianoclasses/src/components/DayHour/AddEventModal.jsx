import React, {useState} from "react";
import Modal from "react-modal";
// import Datetime from "react-datetime"
import './DayHour.css';

import moment from "moment";

// var showCalEnd=true;

export default function AddEventModal ({isOpen, onClose, onEventAdded, calValues}) {
    
    const [title, setTitle] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState("");
    const [newEnd, setNewEnd] = useState(false);
    const [show, setShow] = useState();


     // effect runs on component mount
    //  useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setStart(calValues.start), 1000);
        if (newEnd===false) {
            // console.log(calValues.end);
            setTimeout(() => setEnd(calValues.end), 1000);
            setTimeout(() => setNewEnd(true), 2000);
        }

    // });

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
        overlay: {zIndex: 1000}
      };

    //   function addMinutes(date, minutes) {
    //     console.log(`add duration ${minutes}`);
    //     console.log(`add duration ${minutes}`);
    //     var newEnd = moment(date).add(minutes, 'm').toDate();
    //     newEnd = moment(newEnd).format("YYYY-MM-DD HH:mm:ss");
    //     console.log(`add new date time ${newEnd}`);
    //     setEnd(newEnd);
    //     end = newEnd;
    //     console.log(`changed end date time to : ${end}`);
    //     }
    const onChange = (event) => {
        const value = event.target.value;
        console.log(`value is ${value}`);

        var newEnd = moment(calValues.start).add(value, 'm').toDate();
        newEnd = moment(newEnd).format("YYYY-MM-DD HH:mm:ss");
        
        setTimeout(() => setEnd(newEnd), 1000);
        console.log(`end : ${end}`);
        console.log(`changed end date time to newEnd: ${newEnd}`);
        // addMinutes (calValues.start,value);
        // setSelectValue(value);
      };
      const handleClose = () => setShow(false);

    return (
        <Modal show={show} style={customStyles} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} >
            {/* <form  className="add-event-modal" onSubmit={onSubmit}> */}
            <form  className="add-event-modal" >
                <label>Student's name</label>
                <input className="lesson-input" placeholder="Student's name" value={title} onChange={e => setTitle(e.target.value)} />
                <div>
                    <label>Start Date</label>
                    <input className="lesson-input" value={start} onChange={e => setStart(e.target.value)} />
                    {/* <Datetime initialValue={calValues.start} value={start} onChange={date => setStart(date)}/> */}
                </div>
                <div>
                    <label>Choose the class duration: </label>

                    <select name="duration" id="duration" onChange={onChange} >
                        <option value="0">--</option>
                        <option value="30">30 mins</option>
                        <option value="45">45 mins</option>
                        <option value="60">60 mins</option>
                    </select>
                    {/* <Datetime value={end} onChange={date => setEnd(date)} /> */}
                </div>
                <div>
                    <label>End Time</label>
                    
                    {end && <input placeholder="" className="lesson-input"  value={end} readOnly />}
                    {/* <Datetime className="lesson-date" initialValue={calValues.end} value={end} onChange={date => setEnd(date)} open={false}/> */}
                </div>
                <div className="modal-buttons">
                    <button onClick={handleClose}>Cancel❌</button>
                    <button type="submit" onClick={onSubmit}>Add Lesson</button>                    
                </div>

            </form>
        </Modal>
    )
}