import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Admin from '../pages/Admin';
import Calendar from '../pages/Calendar';
import Contact from '../pages/Contact';
import ExamsBooks from '../pages/ExamsBooks';
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
            <Route path= '/Login' element={<Login/>}/>
            <Route path= '/Admin' element={<Admin/>}/> 
            <Route path= '/Calendar' element={<Calendar/>}/> 
            <Route path= '/Contact' element={<Contact/>}/>
            <Route path= '/ExamsBook' element={<ExamsBooks/>}/>
            <Route path= '/Register' element={<Register/>}/>
            <Route path= '/Tips' element={<Tips/>}/>
            <Route path= '/User' element={<User/>}/>
            <Route path= '/show' element={<ShowUsers/>}/>
            
            
        </Routes>
        </BrowserRouter>   
        )}
export default Router