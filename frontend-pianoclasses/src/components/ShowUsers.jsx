import React, {useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
        await axios.delete(`${endpoint}/users/${id}`)
        getAllUsers()
    }

  return (

    <div>
        <div className='d-grid gap-2'>
            <Link to = '/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped'> 
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Authorised User</th>
                </tr>
            </thead>
            <tbody>
                { users.map( (user) => (
                    <tr key={user.id}>
                        <td> {user.contact_name} </td>
                        <td> {user.email} </td>
                        <td> {user.is_authorised} </td>
                        <td>
                            <Link to={`/edit/${user.id}`} className= 'btn btn-warning'>Edit</Link>
                            <button onClick={ ()=>deleteUser(user.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default ShowUsers