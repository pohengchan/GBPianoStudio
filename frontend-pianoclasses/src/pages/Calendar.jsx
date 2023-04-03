import React from 'react';
import DayHour from '../components/DayHour/DayHour';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CalendarLegend from '../components/DayHour/CalendarLegend';

function Calendar() {
  return (
    <>
    <Navbar/>
    <CalendarLegend/>
    <DayHour/>
    <Footer/>
   </>
  )
}

export default Calendar