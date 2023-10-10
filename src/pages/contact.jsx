import React from 'react';
import { useState } from 'react';
import './Contact.css';
import { RiSendPlaneFill } from 'react-icons/ri';
import Navigation from './navigation';
import Footer from './footer';
  
function Contact () {
  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [phone,setPhone] = useState(null);
  const [subject,setSubject] = useState(null);
  const [msg,setMessage] = useState(null);

  const submitBtn = () => {
    // var fs = require('fs');
    // var content = `name = ${name}\n 'email = ${email}\n phone = ${phone}\n subject = ${subject}\n message = ${msg}\n`;
    // fs.writeFile('contact.txt', content, function (err) {
    //   if (err) throw err;
    //   console.log('Saved!');
    // });
    console.log(`hello ${name} ${email} ${phone} ${subject} ${msg}`);
  }

  return( 
    <div className='container'>
      <Navigation />
      <div style={{'display': 'block'}}>
        <div className='contact-title'>
          <header>Contact Us</header>
        </div>
      </div>
      <div className='form-container'>
        <form className='form' onSubmit={submitBtn}>
          <div className='form-container'>
            <div className='input-container'>
              <input className='input-field' type={'text'} autoComplete="new-password" placeholder={'Enter Your Name'} onChange={e => setName(e.target.value)}/>
              <input className='input-field' type={'number'} autoComplete="new-password" placeholder={'Enter Your Phone'} onChange={e => setPhone(e.target.value)}/>
            </div>
            <br />
            <div className='input-container'>
              <input className='input-field' type={'text'} autoComplete={"new-password"} placeholder={'Enter Your Email'} onChange={e => setEmail(e.target.value)}/>
              <input className='input-field' type={'text'} autoComplete={"new-password"} placeholder={'Enter Your Subject'} onChange={e => setSubject(e.target.value)}/>
            </div>
            <textarea placeholder='Enter Your Message' className='text-field' type={'text'} onChange={e => setMessage(e.target.value)}/>
            <div className='send-btn'>
              <button type='submit' className='btn' >
                Send Message
                {/* <RiSendPlaneFill style={{'padding':5}} /> */}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}


export default Contact;