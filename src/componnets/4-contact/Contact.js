import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-mail-envelope-closed'></span>
        Contact Us
      </h1>
      <p className='sub-title'>Contact us for more information , and get notified when i publish something new</p>

      <div className='flex'>
        <form>
          <div className='flex'>
            <lable htmlFor='email'>Email Address:</lable>
            <input  required type='email' id='email'></input>
          </div>

          <div className='flex' style={{marginTop: "24px"}}>
            <lable htmlFor='message'>Your Message:</lable>
            <textarea required type='message' id='message'></textarea>
          </div>

          <button className='submit'>Submit</button>
        </form>
          <div className='border animation'></div>
      </div>
    </section>

  )
}
