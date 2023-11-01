import React from 'react'
import img2 from './images/img-2.jpg'
import './Third.css'
const Third = () => {
  return (
    <div>
      <div className='lrcontainer'>
        
        <div className='left'>
        <h3 className='h3'>Eco-friendly, Efficient, and <br/>Elegant</h3>
        <p>Minimize your carbon footprint through EcoVacc’s<br/> sustainable design and eco-conscious components,<br/>transforming the future of cleaning.</p>
        </div>
        <div className='right'><img className='img-2' src={img2}/></div>
      </div>

    </div>
  )
}

export default Third
