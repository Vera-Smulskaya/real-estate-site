import React, { Component } from "react";
import { Logo } from "../logo/logo.jsx";
import "./footer.css";
import { ContactInfo } from "../contactInfo/contactInfo.jsx";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <Logo color="red" />
          <section className="footer__contact-info contact-info">
            <h3 className="contact-info__title">Contact Info</h3>
            <ul className="contact-info__list">
              <ContactInfo
                className={"footer-contact__info"}
                type="adress"
                border={true}
              >
                24th Street, New York, USA
              </ContactInfo>
              <ContactInfo
                className={"footer-contact__info"}
                type="tel"
                border={true}
              >
                +0 123-456-7890
              </ContactInfo>
              <ContactInfo
                className={"footer-contact__info"}
                type="mail"
                border={true}
              >
                info@example.com
              </ContactInfo>
            </ul>
          </section>
        </div>
      </footer>
    );
  }
}
