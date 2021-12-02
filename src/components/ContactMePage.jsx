import React from "react";

export const ContactMePage = () => {
  return (
    <section className="contact">
      <h1 className="contact-title">
        L<span className="letter-e">e</span>t's get in touch
      </h1>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="input-container">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>

          <div className="input-container">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>

          <div className="input-container">
            <label htmlFor="">Comments</label>
            <textarea type="text" />
          </div>

          <div className="sub-btn-container">
            <button className="sub-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};
