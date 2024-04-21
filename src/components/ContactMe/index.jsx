import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import { Row } from "react-bootstrap";

// import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const {    
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const form = useRef();

  const sendEmail = (e) => {
    setDisabled(true);
    // e.preventDefault();

    emailjs.sendForm(
        "service_qbupv94",
        "template_7bkx3r4",
        form.current,
        "g12XitBzjdKH-ZSt3"
      ).then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toggleAlert('Ashley has recieved your message!', 'success');
          setDisabled(false);
          reset();
        },
        (error) => {
          console.log(error.text);
          toggleAlert('Uh oh. Something went wrong.', 'danger');
          setDisabled(false);
          reset();
        },
        
      );
  };

  return (
    <>
    <h1 className="aboutMe">Contact Me</h1>
      <form ref={form} onSubmit={handleSubmit(sendEmail)} noValidate>
        
        <input type="text" name="name"  {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                        placeholder="Name*" className="formInput"/>
                         {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
        <br ></br>
        
        <input type="email" name="email" {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      placeholder="Email*" className="formInput"/>
                       
                    {errors.email && (
                      <span className='errorMessage'>Please, enter a valid email.</span>
                    )}
        <br></br>
        
        <input type="text" name="subject" {...register('subject', {
                        required: { value: true, message: 'Please, enter a subject.' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters.'
                        }
                      })}
                      placeholder="Subject" className="formInput"/>
                      {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
        <br></br>
        
        <textarea name="message" 
                      {...register('message', {
                        required: true
                      })}
                      placeholder="Message*" className="formInput"/>
                      {errors.message && <span className='errorMessage'>Please, enter a message.</span>}
        <br></br>


        <button type="submit" value="Send" className="submit-btn">Send</button>
        <br></br>
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
            role='alert'
          >
            {alertInfo.message}
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
              onClick={() =>
                setAlertInfo({ display: false, message: '', type: '' })
              } // Clear the alert when close button is clicked
            ></button>
          </div>
        )}
      </form> 

      <h2 className="socials">Connect With Me</h2>
      <div className="row" >
        <a href="https://github.com/a-nord" target="_blank">
          < AiFillGithub className="social-icons"/>
        </a>
        <a href="https://www.linkedin.com/in/ashleynord/" target="_blank">
          <FaLinkedinIn className="social-icons"/>
        </a>            

        <a href="https://www.instagram.com/ashley.s.l.n" target="_blank">
          <AiFillInstagram className="social-icons"/>
        </a>
      </div>
      
    </>
  );
};

export default Contact;

