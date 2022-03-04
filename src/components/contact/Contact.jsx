import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

import emailjs from "emailjs-com";
// import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_icuxugm",
      "template_qk2p81z",
      form.current,
      "kFUxGphxOo0NfCh3G"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h6>yogender.singh4343@gmail.com</h6>
            <a href="mailto:yogender.singh4343@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Akash Panwar</h5>
            <a href="https://m.me/akash.panwar.31508076j" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 1234567890</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+918178564297"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} action="">
          <input type="text" name="name" placeholder="your fullname" required />
          <input
            type="email"
            name="email"
            id=""
            placeholder="your email"
            required
          />
          <textarea
            name="message"
            placeholder="your mesaage plz"
            required
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
