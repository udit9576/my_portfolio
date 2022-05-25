import React from 'react';
import './contact.css';
import {BsMailbox} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b16qyau', 'template_zlj5ltb', form.current, '_bnHrGG9QdX71ZlA8')
      .then((result) => {
          toast.success('Message Sent');
          e.target.reset();
      }, (error) => {
          toast.error('Message Not Sent');
      });

  };

  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <BsMailbox className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>udit_kinger2156@yahoo.com</h5>
            <a href='mailto:udit_kinger2156@yahoo.com'>Send a message</a>
            
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917698874250</h5>
            <a href='https://web.whatsapp.com/send?phone917698874250'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name' required/>
          <input type='text' name='email' placeholder='Email Address' required/>
          <textarea name='message' rows='7' placeholder='Write Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        <ToastContainer/>
      </div>
    </section>
  )
}

export default Contact