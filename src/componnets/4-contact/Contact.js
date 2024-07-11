import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvwvvkr");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-mail-envelope-closed"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information , and get notified when i publish
        something new
      </p>

      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <lable htmlFor="email">Email Address:</lable>
            <input autoComplete="off" required type="email" id="email" name="email"></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <lable htmlFor="message">Your Message:</lable>
            <textarea
              required
              type="message"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {state.succeeded && (<p style={{fontSize: '16px', marginTop: '1.7rem'}}>Your Message has been sent successfuly 👌</p>)}
        </form>
        <div className="border animation">Animation</div>
      </div>
    </section>
  );
}
