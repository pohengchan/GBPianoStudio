import React from 'react';
import '../index.css';

function TipsText() {
  return (
    <>
    <div id='container-father-box'>
         <div className='container-textborder'>
        <p className='p-landing'>
         <br></br> Below you can see some basic teaching tips I give to my students. I hope it helps!<br></br><br></br>
         </p>
         <ul>
            <li className='li-tips'>Count EVERYTHING!</li>
             <li className='li-tips'>Use the rhymes to help you work out notes.</li>
            <li className='li-tips-bold'>- Right Hand </li>
             <ul><li className='li2'>Lines- Every Good Boy Deserves Fudge </li>
             <li className='li2'>Spaces- FACE </li></ul>
            
             <li className='li-tips-bold'>- Left Hand</li>
             <ul><li className='li2'>Lines- Good Boys Deserve Fudge Always</li>
             <li className='li2'>Lines- Good Boys Deserve Fudge Always</li>
             <li className='li2'>Spaces- All Cows Eat Grass</li></ul>
             <li className='li-tips'>Write notes into your copy (in pencil) </li>
             <li className='li-tips'>Take your time </li>
             <li className='li-tips'>Listen to what you are playing </li>
             <li className='li-tips'>Practice in small 2,4 or 8 bar sections </li>
             <li className='li-tips'>Listen to your pieces through a streaming service or on YouTube. (Try to find an example with a professional teacher/examiner playing- not a student!)</li>

        </ul>
       
        </div>
    </div>
    </>
  )
}

export default TipsText