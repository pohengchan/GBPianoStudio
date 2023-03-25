import React from 'react';
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Admin from '../pages/Admin';
import Calendar from '../pages/Calendar';
import Contact from '../pages/Contact';
import Exams from '../pages/Exams';
import Register from '../pages/Register';
import Tips from '../pages/Tips';
import User from '../pages/User';
import Login from '../pages/Login';
import ShowUsers from '../components/ShowUsers';



function Router() { 

    return (
    <BrowserRouter>

        <Routes>
            <Route path= '/' element={<App/>}/> 
            <Route path= '/About' element={<About/>}/>            
            {/* <Route path= '/Login' element={<Login/>}/> */}
            <Route path= '/Login' element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Login/>} />
            <Route path= '/Admin' element={<Admin/>}/> 
            {/* <Route path= '/Calendar' element={<Calendar/>}/>  */}
            <Route path= '/Calendar' element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Calendar/>} />
            <Route path= '/Contact' element={<Contact/>}/>
            <Route path= '/Exams' element={<Exams/>}/>
            {/* <Route path= '/register' element={ <Register/>} /> */}
            <Route path= '/Register' element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Register/>} />
            <Route path= '/Tips' element={<Tips/>}/>
            <Route path= '/User' element={<User/>}/>
            <Route path= '/show' element={<ShowUsers/>}/>
            
            
        </Routes>
        </BrowserRouter>   
        )}
export default Router