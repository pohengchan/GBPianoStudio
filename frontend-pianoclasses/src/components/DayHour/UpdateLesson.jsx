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
            // const response = await axios.get(`/api/objects/${id}`);
            const response = await instance.get(`http://localhost:8000/api/lesson/${eValues.id}`);
            // setObjectData(response.data);
            userID = response.data.user_id;
            // console.log(objectData.is_confirmed)//this works
            // const objectDataID = objectData.is_confirmed;
        } catch (error) {
            console.error(error);
        }
        }
        fetchData();
    });


    const handleUpdate = async (id) => {
        try {
            // const result = await axios.post(`YOUR_URL`, {<Your JSON payload>});
            const result = await instance.put(`http://localhost:8000/api/lesson/${eValues.id}`, {
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
            title: "You have successfully changed the lesson. An email has been sent to Gillian. You will receive an email when she has confirmed the change. ",
            color: 'white',
            background: '#676060',
            showConfirmButton: true,
            confirmButtonColor: '#01FDFD',
        });
    };


    const handleClose = () => {
        onClose(true);
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

                <div>
                  <div className="modal-buttons">Are you sure you want to change this lesson? </div>
                  <div className="modal-buttons">
                    <button  className="confirm-buttons" onClick={handleClose}>CANCEL</button>
                    <button className="confirm-buttons" onClick={handleUpdate}>CONFIRM</button> 
                  </div>
                </div>

            </div>
            </div>
    // </Modal>
  )
}
