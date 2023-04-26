import React, { useState } from 'react'
import '../Styles/ContactUs.css';

const ContactUs = () => {

  //use state to store the name, email and message
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //a function to handle the sending of message after the user clicks the send button
  const sendMessage = (event) => {
    event.preventDefault(); // prevent default form submission
    if (fullName === '' || email === '' || message === '') {
      window.alert('Please fill in all fields before sending.');
    } else {
      window.alert(`Email: ${email}\n\nMessage: ${message}`);

      //set the fields to empty after submitting
      setFullName('');
      setEmail('');
      setMessage('');
    }
  };



  return (
    <div>
      <form className='form'>
        <div className='form-control'>
          <label htmlFor='fullName'>Full Name: </label>
          <input type='text' id='fullName' name='fullName' value={fullName} onChange={(event) => setFullName(event.target.value)}/>
          <label htmlFor='email'>E-mail Address: </label>
          <input type='text' id='email' name='e mail' value={email} onChange={(event) => setEmail(event.target.value)}/>
          <label htmlFor='message'>Message: </label>
          <textarea id='message' name='message' value={message} onChange={(event) => setMessage(event.target.value)}/>
          <button type='submit' onClick={sendMessage}>Send</button>
        </div>
        
      </form>
    </div>
  )
}

export default ContactUs