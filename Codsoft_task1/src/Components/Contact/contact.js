import "./contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from '@mui/material';
import { useState } from 'react';
import {snackbarData} from '@mui/material'

const Contact = () => {
  const [snackbarData, setSnackbarData] = React.useState({
    open: false,
    message: "",
    severity: "success", 
  });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current.from_email.value.trim();
    const name = form.current.from_name.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();
  
    if (!email || !name || !subject || !message) {
      console.log("Please fill in all fields");
      setSnackbarData({
        open: true,
        message: "Please fill in all fields",
        severity: "error",
      });
      return;
    }

    emailjs.sendForm("service_hubtf5o", "template_lq4ik5x", form.current, 'WiEGF5allhyTqnqOW')
    .then(
      (result) => {
        setSnackbarData({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setSnackbarData({
          open: true,
          message: "Error sending email. Please try again later.",
          severity: "error",
        });
      }
    );
  }


  return (
    <div id="contact_form">
      <div className="contact">
        <h1>Contact Me</h1>
      </div>
      <div className="form1">
        <form ref={form} onSubmit={handleSubmit}>
          
            <input type="text" placeholder="Full Name" className="form-input"  name="from_name"/>
            <input type="email" placeholder="Email Address" className="form-input" name="from_email"/>
           <input type="text" placeholder="Email Subject" className="form-input" name="subject"/>
        
          <textarea placeholder="Message" className="form-textarea"   rows="4" name="message"></textarea>
          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
