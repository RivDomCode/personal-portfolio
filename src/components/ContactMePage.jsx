import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const ContactMePage = () => {
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
    <section className="contact">
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
            <input type="text" name="user_name" required />
          </div>

          <div className="input-container">
            <label htmlFor="">Email</label>
            <input type="email" name="user_email" required />
          </div>

          <div className="input-container">
            <label htmlFor="">Comments</label>
            <textarea type="text" name="message" required />
          </div>

          <div className="sub-btn-container">
            <button className="sub-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
