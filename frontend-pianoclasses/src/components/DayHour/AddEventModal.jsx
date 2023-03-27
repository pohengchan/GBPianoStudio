import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import './DayHour.css';

import moment from "moment";

export default function AddEventModal ({isOpen, onClose, onEventAdded, calValues}) {
    
    const [title, setTitle] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [show, setShow] = useState();

    useEffect(() => {
        // simulate async api call with set timeout
        setTimeout(() => setStart(calValues.start), 1000);
        setTimeout(() => setEnd(calValues.end), 1000);

        // console.log(`end value passed is ${end}`);
    }, [calValues.start,calValues.end]); // pass an empty array as the second argument to useEffect to run it only once on mount
   
    const onSubmit = (event) => {
        console.log(`add class: ${event.start}`);
        event.preventDefault();
        onEventAdded({
            user_id:1,
            title,
            start ,
            end 
        })
        onClose();
    }

    const customStyles = {
        overlay: {zIndex: 1000}
      };

  
    const onChange = (event) => {
        const value = event.target.value;

        var newEnd = moment(calValues.start).add(value, 'm').toDate();
        newEnd = moment(newEnd).format("YYYY-MM-DD HH:mm:ss");
        
        setTimeout(() => setEnd(newEnd), 1000);
      };

    const handleClose = () => {
        setShow(false);
    };

    return (
        <Modal show={show} style={customStyles} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} >
            <form  className="add-event-modal" >
                <label>Student's name</label>
                <input className="lesson-input" placeholder="Student's name" value={title} onChange={e => setTitle(e.target.value)} />
                <div>
                    <label>Start Date</label>
                    <input className="lesson-input" value={start} onChange={e => setStart(e.target.value)} />
                </div>
                <div>
                    <label>Change the class duration: </label>
                    <select name="duration" id="duration" onChange={onChange} >
                        <option value="30">30 mins</option>
                        <option value="45">45 mins</option>
                        <option value="60">60 mins</option>
                    </select>
                </div>
                <div>
                    <label>End Time</label>
                    {end && <input placeholder="" className="lesson-input"  value={end} readOnly />}
                </div>
                <div className="modal-buttons">
                    <button onClick={handleClose}>Cancel❌</button>
                    <button type="submit" onClick={onSubmit}>Add Lesson</button>                    
                </div>
            </form>
        </Modal>
    )
}
