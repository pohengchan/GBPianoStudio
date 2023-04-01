import React, {useEffect} from "react";
import '../../index.css';
import moment from "moment";
import { getAxiosInstance } from '../../services/functions';
import Swal from "sweetalert2";

var instance = getAxiosInstance();
var userID = 0;

export default function UpdateLesson ({isUpdateOpen, onClose, eValues}) {

    useEffect(() => {
        async function fetchData() {
          try {
              const response = await instance.get(`/api/lesson/${eValues.id}`);
              userID = response.data.user_id;
          } catch (error) {
              console.error(error);
          }
        }
        fetchData();
    });


    const handleUpdate = async (id) => {
        try {
            const result = await instance.put(`/api/lesson/${eValues.id}`, {
                user_id: userID,
                title:eValues.title,
                start:eValues.start,
                end:eValues.end,
                is_confirmed: 0,
            });
            console.log(result);
            console.log(instance);
          } catch (error) {
            console.error(error);
          }
        onClose();

        Swal.fire({
          position: 'center',
          title: 'Lesson added',
          text: 'You have successfully changed the lesson! Please check your calendar in 24hrs to see if Gillian has confirmed the lesson.',
          confirmButtonText: 'OK',
          color: 'white', 
          background: '#676060', 
          confirmButtonColor: 'black', 
          customClass: {
            confirmButton: 'custom-button-class confirm-button'
          },
          buttonsStyling: false,
        }) 
    };


    const handleClose = () => {
        onClose(true);
    };

  return (
    
        <div className="modal">
            <div className="modal-content">
              <h1>Lesson details</h1>
              <div>Student: {eValues.title}</div>
              <div>Date: {moment(eValues.start).format("ddd")} {moment(eValues.start).format("Do MMM YYYY")} </div>
              <div>Start Time: {moment(eValues.start).format("HH:mm")}</div>
              <div>End Time: {moment(eValues.end).format("HH:mm")}</div>
              <div>
                <div className="modal-buttons">Are you sure you want to change this lesson? </div>
                <div className="modal-buttons">
                  <button  className="confirm-buttons" onClick={handleClose}>CANCEL</button>
                  <button className="confirm-buttons" onClick={handleUpdate}>CONFIRM</button> 
                </div>
              </div>
            </div>
        </div>

  )
}
