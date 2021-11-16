import React, { useRef, useState } from "react";
import EmailJS from "emailjs-com";


export default function ContactMe() {
  const formRef = useRef(); /* this is a tag which we will attach to our form */
  const [status, setStatus] = useState(false);

  const contextHeader = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJS.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
        if (result.text === "OK") {
          /* ??? */
          setStatus(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    formRef.current.reset();
  };


  return (
    <div className="container-form">
      <div className="entrance-form">
        <h2 ref={contextHeader}>Contact Form</h2>
        <div class="bottom-line"></div>
        <p>Here is how you can reach me</p>
      </div>

      <div>
        {status ? (
          <h2>Thanks for your email</h2>
        ) : (
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="text-fields">
              <input
                type="text"
                placeholder="Name:"
                required
                name="user_name"
                className="name-input"
              />

              <input
                type="email"
                required
                placeholder="Email:"
                name="user_email"
                className="email-input"
              />

              <input
                type="text"
                required
                placeholder="Subject:"
                name="subject"
                className="subject-input"
              />
              <input
                type="tel"
                required
                placeholder="Phone No:"
                name="user_phone"
                className="phone-input"
              />
              <textarea
                required
                name="message"
                placeholder="Enter your message:"
                className="message-input"
              ></textarea>

              <button>Submit</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
