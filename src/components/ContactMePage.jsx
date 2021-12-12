import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaHeart } from "react-icons/fa";

export const ContactMePage = () => {
  let today = new Date();
  let currentYear = today.getFullYear();

  const form = useRef();

  const SERVICE_ID = "service_oqytobj";
  const TEMPLATE_ID = "template_2476zgb";
  const USER_ID = "user_4KWaK2MwNh4cM4yJEZfTS";

  const handleSubmitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    document.getElementById("myForm").reset();
  };

  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">
        L<span className="letter-e">e</span>t's get in touch
      </h1>
      <div className="contact-form-container">
        <form
          className="contact-form"
          onSubmit={handleSubmitForm}
          ref={form}
          id="myForm"
        >
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name here ..."
              autoComplete="off"
            />
          </div>

          <div className="input-container">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your email..."
              autoComplete="off"
            />
          </div>

          <div className="input-container">
            <label htmlFor="">Comments</label>
            <textarea
              type="text"
              name="message"
              required
              placeholder="What you want to say..."
              className="textarea"
            />
          </div>

          <div className="sub-btn-container">
            <button className="sub-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="footer-container">
        <hr />
        <p> © RivDom {currentYear} Portfolio Website </p>
      </div>
    </section>
  );
};
