import React from 'react'
import '../Styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      <form className='form'>
        <div className='form-control'>
          {/* <label htmlFor='firstName'>First Name: </label>
          <input type='text' id='firstName' name='firstName'/> */}
          <label htmlFor='fullName'>Full Name: </label>
          <input type='text' id='fullName' name='fullName'/>
          <label htmlFor='email'>E-mail Address: </label>
          <input type='text' id='email' name='e mail'/>
          <label htmlFor='message'>Message: </label>
          <textarea id='message' name='message'/>
          <button type='submit'>Send</button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactUs