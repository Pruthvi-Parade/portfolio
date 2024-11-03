import { useRef } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_175rx8v', 'template_voaynxq', form.current, {
        publicKey: 'Z26Y6SLmg7OPPYNfX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder='Your Full Name'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder='Your Email'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          {/* <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div> */}
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder='Your Message'
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" value="Send" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
