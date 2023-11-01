import React from 'react'
import './Dosra.css'
import img1 from './images/img-1.jpg'
// import img2 from './images/img-2.jpg'
const Dosra = () => {
  return (
    <div>
      <div className='lrcontainer'>
        <div className='left'><img className='img-1' src={img1}/></div>
        <div className='right'>
        <h3 className='h3'>Smart Technology<br/> blended with Ingenious<br/> Design</h3>
        <p>EcoVacc features advanced AI algorithms and <br/>powerful ML models for exceptional navigation,<br/>proficient dust-busting, and masterful energy<br/> management.</p>
        </div>
      </div>
    </div>
  )
}

export default Dosra
