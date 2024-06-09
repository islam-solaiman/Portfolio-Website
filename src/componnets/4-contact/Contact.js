import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-mail-envelope-closed'></span>
        Contact Us
      </h1>
      <p>Contact us for more information , and get notified when i publish something new</p>

      <div className='flex'>
        <form className='border'>
          <lable htmlFor='email'>Email Address: </lable>
          <input type='email' id='email'></input>

          <lable htmlFor='message'>Your Message: </lable>
          <textarea type='message' id='message'></textarea>

          <button>Submit</button>
        </form>
          <div className='border animation'>Animation</div>
      </div>
    </section>

  )
}
