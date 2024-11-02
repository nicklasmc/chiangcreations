import React from 'react'
import './Contact.css'
import placeholder from '../../assets/placeholder.jpg'

const Contact = () => {

  const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending Message....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "23294a4f-0cff-4fe0-91ce-f536cb3209bc");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Email Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Get in touch with us! <img src={placeholder} alt=''/></h3>
        <p>Please use the contact form below to send us feedback, ask questions, or provide suggestions!</p>
        <ul>
          <li><img src={placeholder} alt=''/>chiangcreations@yahoo.com</li>
          <li><img src={placeholder} alt=''/>(XXX)XXX-XXXX</li>
          <li><img src={placeholder} alt=''/>1234 Street Street, City <br/> State Zip, County</li>
        </ul>
      </div>

      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <div className='signup-label-container'>
              <label className='signup-label'>
                <img src=''/>
                <input
                  type='text'
                  id='name'
                  className='signup-input'
                  placeholder='Name'
                  required
                />
              </label>
          </div>

          <div className='signup-label-container'>
              <label className='signup-label'>
                <img src=''/>
                <input
                  type='email'
                  id='email'
                  className='signup-input'
                  placeholder='Email'
                  required
                />
              </label>
          </div>

          <div className='signup-label-container'>
              <label className='signup-label'>
                <img src=''/>
                <textarea 
                  name='message'
                  rows='6'
                  className='signup-input'
                  placeholder='Enter your message'>
                </textarea>
              </label>
          </div>
          <button className='contact-btn'>Submit Message</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact