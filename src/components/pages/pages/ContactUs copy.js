import React from "react";
import "../../../css/ContactUs.css";
import { BiEnvelope, BiPhoneCall } from "react-icons/bi";
import {
	IoIosArrowForward
} from 'react-icons/io';

const ContactUs = () => {
  return (
    <div>
      <div
        class="iq-breadcrumb-one  iq-bg-over iq-over-dark-50"
        style={{
          backgroundImage: `url(
				"https://vinzator.com/movieProject/contact-us.jpg"
			)`,
        }}
      >
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-sm-12">
              <nav class="text-center ">
                <h2 class="faq-title">Contact Us</h2>
                <ol>
                  <li class="faq-title-home ">
                    <a href="/">Home</a>
                  </li>
                  <li><a class="arrowforward" href="#top"><IoIosArrowForward/></a></li>
                  <li class="faq-title-home ">
                    <a href="/ContactUs">Contact Us </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-header">
        <span className="contact-us-title">Contact Us</span>
      </div>
      <div className="contact-us-container">
        <div className="contact-us-main-side">
          <div className="contact-us-form-container">
            <form className="contact-us-form">
              <label>Name</label>
              <br />
              <input placeholder="Name" required />
              <br />
              <label>Email Address</label>
              <br />
              <input type="email" placeholder="name@email.com" required />
              <br />

              <label>Phone</label>
              <br />
              <input placeholder="Phone number" required />
              <br />
              <label>Message</label>
              <br />
              <textarea placeholder="Text message..." required />
              <button
                className="btn-contact-us-page-form-submit"
                onClick={() => window.scroll(0, 0)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="contact-us-side-bar">
          <div className="contact-us-side-bar">
            <h3 className="contact-us-side-bar-title">Need Help?</h3>
            <div className="contact-us-side-bar-email">
              <BiEnvelope style={{ fill: "white" }} />
              <span className="contact-us-side-bar-contact-details">
                <a
                  href="mailto:hello@cameracook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact@movieadvicer.com.tr
                </a>
              </span>
            </div>
            <div className="contact-us-side-bar-phone">
              <BiPhoneCall style={{ fill: "white" }} />
              <span className="contact-us-side-bar-contact-details">
                Call: 12345 678 90
              </span>
            </div>
          </div>
          <div style={{ backgroundColor: "black" }}>
            <p style={{ fontSize: "xx-large", color: "white" }}>Say Hello..!</p>
            <p>
              Fill up this form to reach our stunning Streamit team and click on
              send message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
