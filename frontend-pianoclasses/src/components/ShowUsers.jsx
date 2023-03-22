import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/showUsers.css';

const endpoint = 'http://localhost:8000/api';

const ShowUsers = () => {
const [users, setUsers] = useState([]);
const [selectedUser, setSelectedUser] = useState(null);
const [showModal, setShowModal] = useState(false);

useEffect(() => {
    getAllUsers();
}, []);

const getAllUsers = async () => {
    const response = await axios.get(`${endpoint}/users`);
    setUsers(response.data);
};

const getUserDetails = async (id) => {
    const response = await axios.get(`${endpoint}/users/${id}`);
    setSelectedUser(response.data);
    setShowModal(true);
};

const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
};

return (
    <div>
    <h1 className="h1-users">Users</h1>
    <div className="container">
        <div className="tableUsers">
        <table className="table">
            <thead className="head">
            <tr>
                {/* <th>Name Parent´s</th> */}
                <th>Student</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Authorized User</th>
                <th>Management</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                {/* <td>
                    <p>{user.contact_name}</p>
                </td> */}
                <td>
                    <p>{user.student_name}</p>
                </td>
                <td>
                    <p>{user.email}</p>
                </td>
                <td>
                    <p>{user.phone_number}</p>
                </td>
                <td>
                    <input type="checkbox" className="Checkbox" id={`user-${user.id}`} />
                </td>
                <td>
                    <button value="details" onClick={() => getUserDetails(user.id)}>
                    Details
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    {showModal && (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={closeModal}>
            &times;
            </span>
            <div>
            <h2>User Details</h2>
            <p>Name: {selectedUser.contact_name}</p>
            <p>Student: {selectedUser.student_name}</p>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone_number}</p>
            <p>Phone: {selectedUser.date_of_birth}</p>
            <p>Phone: {selectedUser.candidate_number}</p>
            </div>
        </div>
        </div>
    )}
    </div>
    
);
};


export default ShowUsers;
