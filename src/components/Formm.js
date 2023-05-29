import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const Form = ()=> {
    const [data, setData] = useState({name: "", email: "", phone: "", message: ""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]: value})
    }
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4jchlj5', 'template_8hy6ucj', data.current, 'cu-wstqpT_z9jamZ7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          data.current.reset();
          window.location.reload();
      };

  return (
    <form method='post' onSubmit={handleSubmit} ref={data}> 
    <h1>Contact <span>Us</span></h1>
    <input type='text' name='name' id='' onChange={handleChange} value={data.name} placeholder='Enter Name: '/>
    <input type='text' name='email' id='' onChange={handleChange} value={data.email} placeholder='Enter Email : i.e Example@gmail.com'/>
    <input type='text' name='phone' id='' onChange={handleChange} value={data.phone} placeholder='Enter Phone Number : i.e 647...'/>
    <textarea name='message' id='' cols='30' onChange={handleChange} value={data.message} rows='10' placeholder='Any Questions, Comments or Suggestions: Type Here...'/>
    <button type='submit' style={{color: "#ffffff"}}>Send</button>
    </form>
  )
}

export default Form