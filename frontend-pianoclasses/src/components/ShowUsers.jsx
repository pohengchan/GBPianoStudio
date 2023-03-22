import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import '../styles/showUsers.css'

const endpoint = 'http://localhost:8000/api'

const ShowUsers = () => {

    const [users, setUsers ] = useState( [] )

    useEffect ( () => {
        getAllUsers()
    }, [])

    const getAllUsers = async() => {
        const response = await axios.get(`${endpoint}/users`)
        setUsers(response.data)
    }

    const deleteUser = async(id) => {
        await axios.delete(`${endpoint}/users/{id}`)
        getAllUsers()
    }

  return (
<div>
    { <h1 className='h1-users'>Users</h1> }
    
    <div className='container'>
    <div className='tableUsers'>
        {/* { <div className='create'>
        <Link to='/create' className='custom-btn btn-15'>Create</Link>
        </div> } */}
        <table className='table'>
    
        <thead className='head'>
            <tr>
                <th>Name Parent´s</th>
                <th>Student</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Authorized User</th>
            </tr>
        </thead>

        <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td><p>{user.contact_name}</p></td>
                    <td><p>{user.student_name}</p></td>
                    <td><p>{user.email}</p></td>
                    <td><p>{user.phone_number}</p></td>
                    <td>
                        <input type="checkbox" className='Checkbox' id={`user-${user.id}`} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    <div className='button-container'>
        {users.map((user) => (
            <div key={user.id} className='button-group'>
            {/* { <Link to={`/edit/${user.id}`} className='btnedit'>Edit</Link> } */}
            <button as={Link} to={`/edit/${user.id}`} className='btnedit'>Edit</button>
            <button onClick={() => deleteUser(user.id)} className='btndelete'>Delete</button>
            </div>
        ))}
    </div>
</div>
</div>
</div>

  )
}

export default ShowUsers
