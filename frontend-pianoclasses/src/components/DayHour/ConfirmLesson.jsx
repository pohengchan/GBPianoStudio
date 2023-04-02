import React, {useEffect} from "react";
import '../../index.css';
import moment from "moment";
import { getAxiosInstance } from '../../services/functions';
import Swal from "sweetalert2";

let instance = getAxiosInstance();
let showConfirmed = 0;
let userID = 0;

export default function ConfirmLesson ({isOpen, onClose, eValues}) {

    useEffect(() => {
        async function fetchData() {
        try {
            // const response = await axios.get(`/api/objects/${id}`);`/api/login`
            const response = await instance.get(`/api/lesson/${eValues.id}`);
            showConfirmed = response.data.is_confirmed;
            userID = response.data.user_id;
            console.log(response.data.is_confirmed);
        } catch (error) {
            console.error(error);
        }
        }
        fetchData();
    });


    const handleConfirm = async (id) => {
        try {
            const result = await instance.put(`/api/lesson/${eValues.id}`, {
                user_id: userID,
                title:eValues.title,
                start:eValues.start,
                end:eValues.end,
                is_confirmed: 1,
                });
            console.log(result);
            console.log(instance);
          } catch (error) {
            console.error(error);
          }
        onClose();
        Swal.fire({
          position: 'center',
          title: 'Lesson confirmed',
          text: 'You have successfully confirmed the lesson.',
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

    const deleteLesson = async (id) => {
        await instance.delete(`/api/lesson/${eValues.id}`);
        onClose();
        Swal.fire({
          position: 'center',
          title: 'Lesson deleted',
          text: 'You have successfully deleted the lesson.',
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
        onClose();
    };

  return (
        <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleClose}>&times;</span>
              <h2>Lesson details</h2>
              <div>
                <p>Student: {eValues.title}</p>
                <p>Date: {moment(eValues.start).format("ddd")} {moment(eValues.start).format("Do MMM YYYY")}</p>
                <p>Start Time: {moment(eValues.start).format("HH:mm")}</p>
                <p>End Time: {moment(eValues.end).format("HH:mm")}</p>
                {showConfirmed === 0 ?
                <p>Confirmed: No</p>
                :
                <p>Confirmed: Yes</p>
                }
              </div>             

              {localStorage.role === 'admin' && showConfirmed === 0 ?

                <div>
                  <p>Do you want to confirm or delete this lesson? </p>
                  <div className="btnmodal">
                    <button className="btnNav" onClick={handleConfirm}>CONFIRM</button> 
                    <button className="btnNav" onClick={deleteLesson}>DELETE</button> 
                  </div>
                </div> 
                :
                <div className="btnmodal">
                  <button className="btnNav" onClick={handleClose}>OK</button> 
                </div>
              }

            </div>
        </div>
  )
}
