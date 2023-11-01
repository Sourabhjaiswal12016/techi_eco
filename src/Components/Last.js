import React from 'react'
import './Last.css'
import icon1 from '../Components/images/icon1.png'
import icon2 from '../Components/images/icon2.jpg'
import icon3 from '../Components/images/icon3.png'
function Last() {
  return (
    <div className='last'>
      <div className='row'>
        
      <h1 className='hone'><img src={icon1} className='icon'/>AI Mastery</h1>
        <p>Smartest cleaning routines.</p>
      </div>
      <div className='row'>
      <h1 className='hone'><img src={icon2} className='icon'/>Eco Warriors</h1>
      <p>Reduced emissions & waste.</p>
      </div>
      <div className='row last-row' >
      <h1 className='hone'><img src={icon3} className='icon'/>Startup Successes</h1>
      <p>Thriving tech partnerships.</p>
      </div>
    </div>
  )
}

export default Last
