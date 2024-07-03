import { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../components/Styles/Contact.css'
import  "@emailjs/browser"



function Contact(){
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [comment, setComment] = useState('');
  const [anyMessage, setAnyMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'emailAddress'){
        setEmailAddress(value)
    }else if (name === 'fullName'){
        setFullName(value)
    }else { 
        setComment(value)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(emailAddress) || !fullName){
        setAnyMessage('Invalid name or email');
        return;
    }
        console.log(fullName,emailAddress,comment)

        emailjs.send("service_po6zgoc","template_digtl4b",{
          from_name: `${fullName}`,
          to_name: "David",
          message: comment,
          email: `${emailAddress}`,
          });

        setComment('');
        setFullName('');
        setEmailAddress('');
        setAnyMessage('Message sent, Thanks!');
        return;
  }

    return(
      <div className='container text-center '>
        <h2>Contact me via Email</h2>
        <form className='form contactform' onSubmit={handleFormSubmit} id="formed">
          <input
            className='contactinput'
            value={fullName}
            name='fullName'
            onChange={handleInputChange}
            type='text'
            placeholder='Your Name'
            required
          />
          <br></br>
          <input
            className='contactinput'
            value={emailAddress}
            name='emailAddress'
            onChange={handleInputChange}
            type='email'
            placeholder='Email'
            required
          />
          <br></br>
          <input
            className='contactinput'
            value={comment}
            name='comment'
            onChange={handleInputChange}
            type='text'
            placeholder='Your Text'
            required
          />
          <br></br>
          <button type='submit'>
            Submit
          </button>
        </form>
        {anyMessage && (
          <div>
            <p className='any-text'>{anyMessage}</p>
          </div>
        )}
      </div>
    );
}
export default Contact;