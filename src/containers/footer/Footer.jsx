import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './footer.css';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = (e) => {
    // if (name && email && message) {
    const serviceId = 'service_93zg52e';
    const templateId = 'template_ank9pcf';
    const userId = 'FUxcu6mwGyAl0PfEa';
    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => console.log(response))
      .then((error) => console.log(error));

    setName('');
    setEmail('');
    setMessage('');
    setEmailSent(true);
    e.preventDefault();
    // } else {
    //   alert('Please fill in all fields.');
    // }
  };

  return (
    <div className='footer section__padding'>
      <form
        className='footer__contact-form'
        onSubmit={submit}
        id='contact-form'
      >
        <label className='footer__form-label' htmlFor='name'>
          Name:
        </label>
        <input
          id='name'
          className='footer__contact-form-input'
          type='text'
          placeholder='Your name'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label className='footer__form-label' htmlFor='email'>
          Email:
        </label>
        <input
          id='email'
          className='footer__contact-form-input'
          type='email'
          placeholder='Your email'
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='footer__form-label' htmlFor='message'>
          Message:
        </label>
        <textarea
          rows='6'
          id='message'
          className='footer__contact-form-txt'
          placeholder='Your message'
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className='footer__form-privacy-div'>
          <input id='privacy' type='checkbox' required />
          <label className='footer__form-privacy-label' htmlFor='privacy'>
            I've read and agree with the privacy policy
          </label>
        </div>
        <input
          className='footer__form-submit'
          type='submit'
          value='Send Message'
        />
        <span
          className={
            emailSent ? 'footer__contact-span--visible' : 'footer__contact-span'
          }
        >
          Message sent!
        </span>
      </form>

      <Link
        className='footer__privacy-link'
        id='privacy-policy'
        to='/privacypolicy'
        target='_blank'
      >
        Privacy Policy
      </Link>
    </div>
  );
};

export default Footer;
