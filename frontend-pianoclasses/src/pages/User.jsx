import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthorizerUser from '../components/AuthorizerUser';

function User() {
    return (
        <>
        <Navbar/>
        <AuthorizerUser/>
        <Footer/>
        </>
    )
}

export default User