import React, { useRef, useState } from "react";
import EmailJS from "emailjs-com";
import { BiMessageCheck, BiMailSend } from "react-icons/bi";



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
      <div>
        {status ? (
          <div>
            <div className="thanks">
              <div className="message">
                <span className="span_one">
                  <BiMessageCheck />
                </span>
                <p>Thank you for your email.</p>
                <p>We will look into it & will get in touch within 24 hrs.</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="entrance-form">
              <h2 ref={contextHeader}>Contact Form</h2>
              <div class="bottom-line"></div>
              <p>Here is how you can reach me</p>
            </div>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="text-fields">
                {/*  <div className="item-form-icon">
                  <div>
                    
                    <MdDriveFileRenameOutline className="item-form-icon-one" />
                  </div>
                  <div> */}

                <input
                  type="text"
                  placeholder="Name:"
                  required
                  name="user_name"
                  className="name-input item-contact-form"
                />
                {/* </div>
                </div> */}
                <input
                  type="text"
                  placeholder="Surname:"
                  required
                  name="user_surname"
                  className="surname-input item-contact-form"
                />
                <input
                  type="email"
                  required
                  placeholder="Email:"
                  name="user_email"
                  className="email-input item-contact-form"
                />

                <input
                  type="text"
                  required
                  placeholder="Subject:"
                  name="subject"
                  className="subject-input item-contact-form"
                />
                <textarea
                  required
                  name="message"
                  placeholder="Enter your message:"
                  className="message-input item-contact-form"
                ></textarea>

                <button className="submit-button">
                  {/* <div> */} <BiMailSend className="sendbtn" />
                  {/*  </div>{" "} */}
                  {/* <div>Submit</div> */}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
