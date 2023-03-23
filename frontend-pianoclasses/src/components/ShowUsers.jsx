import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const endpoint = 'http://localhost:8000/api';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await axios.get(`${endpoint}/users`);
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`${endpoint}/users/${id}`);
    getAllUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewName(user.contact_name);
    setNewEmail(user.email);
  };

  const handleCancel = () => {
    setEditingUser(null);
    setNewName('');
    setNewEmail('');
  };

  const handleSave = async () => {
    await axios.put(`${endpoint}/users/${editingUser.id}`, {
      contact_name: newName,
      email:newEmail,
      is_authorised: editingUser.is_authorised,
    });
    setEditingUser(null);
    setNewName('');
    setNewEmail('');
    getAllUsers();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-white">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Authorised User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                ) : (
                  user.contact_name
                )}
              </td>
              <td>
              {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                ) : (
                  user.email
                )}
              
              
              </td>
              <td>{user.is_authorised ? 'Yes' : 'No'}</td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <div>
                    <button
                      className="btn btn-success me-2"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowUsers;