import React, {useEffect, useState } from 'react'
import axios from 'axios';
import '../styles/showUsers.css';
import Authorizer from './AuthorizerUser';
import UserDetails from './UserDetails';

const endpoint = 'http://localhost:8000/api';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newName, setNewName] = useState('');
  // const [newEmail, setNewEmail] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${endpoint}/users`);
    setUsers(response.data);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewName(user.contact_name);
    // setNewEmail(user.email);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${endpoint}/users/${id}`);
    getAllUsers();
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };
  // const closeModal = () => {
  //   setShowModal(false);
  // };

  // const getUserDetails = async (id) => {
  //   const response = await axios.get(`${endpoint}/users/${id}`);
  //   setSelectedUser(response.data);
  //   setShowModal(true);
  // };
  const getUserDetails = (userId) => {
    const user = users.find((user) => user.id === userId);
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div>
      <h1 className="users">USERS</h1>
      <div className="container">
        <div className="tableUsers">
          <table className="table">
            <thead className="head">
              <tr>
                <th>Student</th>
                <th>Contact</th>
                <th className='AU'>AU</th>
                <th className='Mgn'>Management</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <p>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                        />
                      ) : (
                        user.student_name
                      )}
                    </p>
                  </td>
                  <td>
                    {/* <p>
                      {editingUser && editingUser.id === user.id ? (
                        <input
                          type="text"
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                        />
                      ) : (
                        user.contact_name
                      )}
                    </p> */}
                  </td>
                  <td>
                    <Authorizer user={user} />
                  </td>
                  <td>
                  <button className="btnNav" value="details" onClick={() => getUserDetails(user.id)}>Details</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {showModal && (
          <UserDetails
            user={selectedUser}
            closeModal={closeModal}
            handleEdit={handleEdit}
            deleteUser={deleteUser}
          />
        )}
      </div>
    </div>
  );
};

export default ShowUsers;
