import React from 'react'
import "./Newletter.css"
import SubHeading from '../SubHeading/SubHeading'

function Newletter() {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-headings' >
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your e-mail address' />
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
};

export default Newletter;