import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_175rx8v', 'template_voaynxq', form.current, 'Z26Y6SLmg7OPPYNfX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>parade.pruthvi@gmail.com</h5>
            <a href='mailto:parade.pruthvi@gmail.com' target='_blank'>Send Message</a>
          </artical>
          <artical className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pruthvi-Parade</h5>
            <a href='https://m.me/profile.php?id=100008194951550' target='_blank'>Send Message</a>
          </artical>
          <artical className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>9834681705</h5>
            <a href='https://api.whatsapp.com/send?phone=9834681705' target='_blank'>Send Message</a>
          </artical>
        </div>

        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact