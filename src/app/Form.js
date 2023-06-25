import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useState } from 'react';

export default function Form() {

    const form = useRef();

    const [submit, setSubmit] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    if(!submit){
        setSubmit("loading")
    emailjs.sendForm("service_wtlr6r7", "template_r3xkk9g", form.current, "dGmtI3Wvy1M8TrdjO")
      .then((result) => {
          console.log(result.text);
          setSubmit("success")
      }, (error) => {
          console.log(error.text);
          setSubmit("error")
      });
  };
  }
  function DialogueBox(){
    let content = ""
    if(submit === "success"){
        content = "Thanks! Your email has been sent!"
    }
    else if(submit === "loading"){
        content = "one sec..."
    }
    else if(submit === "error"){
        content = "Sorry, we're having some issues sending your email. Perhaps try reaching out through LinkedIn (link below)"
    }
    return (
        <div className='dialogue-form'>{content}</div>
    )
  }

    return (
      <div>
        <section className="form-container">
        <form ref={form} onSubmit={sendEmail}>
    
            <div className="form-block">
            <label for="fc-generated-1-name">Your Full Name</label>
            <input type="text" name="user_name" id="fc-generated-1-name" placeholder="Your first and last name" required/>
            </div>
        
            <div className="form-block">
            <label for="fc-generated-1-email">Your Email Address</label>
            <input type="email" name="user_email" id="fc-generated-1-email" placeholder="john@doe.com" required/>
            </div>
        
            <div className="form-block">
            <label for="fc-generated-1-message">Your message</label>
            <textarea name="user_message" id="fc-generated-1-message" placeholder="Enter your message..." required></textarea>
            </div>
        
            <div className="form-block">  
            <input className='submit-button' type="submit" value="Send" />
            </div>
            <DialogueBox />
  
        </form>
        </section>
      </div>
    )
  }
  