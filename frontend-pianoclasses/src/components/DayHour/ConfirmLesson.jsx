import React, {useState, useEffect} from "react";
import './DayHour.css';
import moment from "moment";
import { getAxiosInstance } from '../../services/functions';

var instance = getAxiosInstance();
var showConfirmed = 0;

export default function ConfirmLesson ({isOpen, onClose, eValues}) {

    const [objectData, setObjectData] = useState(null); //get selected event's data
    // const [show, setShow] = useState();
    // console.log(eValues);
    // const objectDataID = getObjectDataById(eValues.id);
    //using event id "info.event.id" get is_confirmed value    
    // function getObjectDataById(id) {

    useEffect(() => {
        async function fetchData() {
        try {
            // const response = await axios.get(`/api/objects/${id}`);
            const response = await instance.get(`http://localhost:8000/api/lesson/${eValues.id}`);
            setObjectData(response.data);
            showConfirmed = response.data.is_confirmed;
            // console.log(objectData.is_confirmed)//this works
            // const objectDataID = objectData.is_confirmed;
        } catch (error) {
            console.error(error);
        }
        }
        fetchData();
    });
  // console.log(objectData);
  // console.log( objectData.is_confirmed);
  // console.log( selectID);
//    const objectDataID = objectData.is_confirmed;
// }

    const handleConfirm = async () => {
        await instance.put(`http://localhost:8000/api/lesson/${eValues.id}`, {
        user_id: localStorage.id,
        title:eValues.title,
        start:eValues.start,
        end:eValues.end,
        is_confirmed: 1,
        });
        onClose();
    };

    const deleteLesson = async (id) => {
        await instance.delete(`http://localhost:8000/api/lesson/${eValues.id}`);
        onClose();
    };

    const handleClose = () => {
        console.log(localStorage.role);
        console.log(localStorage.role);
        // setShow(false);
        onClose();
    };

  return (
    // <Modal show={show} style={customStyles} isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} >
        <div className="modal">
            <div className="modal-content">
              <h1>Lesson details</h1>
              <div>Student: {eValues.title}</div>
              <div>Date: {moment(eValues.start).format("ddd")} {moment(eValues.start).format("Do MMM YYYY")} </div>
              <div>Start Time: {moment(eValues.start).format("HH:mm")}</div>
              <div>End Time: {moment(eValues.end).format("HH:mm")}</div>

              {/* {localStorage.role === 'admin' && objectData.is_confirmed!==1 ? */}
              {localStorage.role === 'admin' && showConfirmed === 0 ?

                <div>
                  <div>Do you want to confirm or delete this lesson? </div>
                  <div>--Tap outside the box to take no action--</div>
                  <div className="modal-buttons">
                    <button onClick={deleteLesson}>DELETE</button> 
                    <button onClick={handleClose}>CANCEL</button>
                    <button onClick={handleConfirm}>CONFIRM</button> 
                  </div>
                </div> 
                :
                <div className="modal-buttons">
                  <button onClick={handleClose}>OK</button> 
                </div>
              }

            </div>
            </div>
    // </Modal>
  )
}
