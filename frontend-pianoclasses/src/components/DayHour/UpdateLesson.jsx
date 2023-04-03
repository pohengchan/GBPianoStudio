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
              <span className="span-modal-close" onClick={handleClose}>&times;</span>
              <h2>Lesson details</h2>
              <div>
                <div className="div-modal-text">
                  <p className="p-modal-text">Student:</p>
                  <p> {eValues.title}</p>
                </div>
                <div className="div-modal-text">
                  <p className="p-modal-text">Date:</p>
                  <p> {moment(eValues.start).format("ddd")} {moment(eValues.start).format("Do MMM YYYY")}</p>
                </div>
                <div className="div-modal-text">
                  <p className="p-modal-text">New Start Time:</p>
                  <p> {moment(eValues.start).format("HH:mm")}</p>
                </div>
                <div className="div-modal-text">
                  <p className="p-modal-text">New End Time:</p>
                  <p> {moment(eValues.end).format("HH:mm")}</p>
                </div>
              </div>
              <div>
                <p>Are you sure you want to change this lesson? </p>
                <div className="modal-button-container">
                  <button className="btn-modal" onClick={handleUpdate}>CONFIRM</button> 
                  <button  className="btn-modal btn-cancel" onClick={handleClose}>CANCEL</button>
                </div>
              </div>
            </div>
        </div>

  )
}
