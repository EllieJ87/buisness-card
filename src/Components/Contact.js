import React from "react";

export default function Contact() {
  return (
        <div className='contact'>
          <h1 className='name'>Ellie Judge</h1>
          <h3 className='title'>Front End Developer</h3>
          <h4 className='email'>ellie_judge@hotmail.co.uk</h4>
          <div className='contact-buttons'>
            <button className='email-btn'>
              <i className="fa fa-solid fa-envelope"></i>Email
            </button>
            <button className='linkedin-btn'>
              <i className="fa fa-brands fa-linkedin"></i>LinkedIn
            </button>
          </div>
        </div>
  );
}