import React, {useState} from "react";
import Modal from "react-modal";
// import Datetime from "react-datetime"
import './DayHour.css';

export default function AddEventModal ({isOpen, onClose, onEventAdded, info}) {
    
    const [title, setTitle] = useState("");
    let [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    
    start="12:15:00";

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title: "Mary",
            start: "2023-03-24 15:00:00",
            end: "2023-03-24 16:00:00"
        })
        onClose();
    }

    const customStyles = {
        // content : {
        //   ...
        // },
        overlay: {zIndex: 1000}
      };

    return (
        <Modal style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
            <form  className="add-event-modal" onSubmit={onSubmit}>
                <label>Student's name</label>
                <input className="cal-input" placeholder={title} value="Anna" onChange={e => setTitle(e.target.value)} />
                <div>
                    <label>Start Date</label>
                    <input type="date" id="lessonDate"
                    value = "2023-03-25" readonly />
                    <label>Start Time</label>
                    <input type="time" id="sTime" value={start} readonly/>
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
                    <input type="time" id="eTime" value="13:00:00" onChange={e => setEnd(e.target.value)}readonly/>
                    {/* <input type="time" value={end} onChange={e => setEnd(e.target.value)} />
                    <Datetime value={end} onChange={date => setEnd(date)} /> */}
                </div>
                <div className="modal-buttons">
                    <button>Cancel</button>
                    <button>Add Lesson</button>                    
                </div>

            </form>
        </Modal>
    )
}