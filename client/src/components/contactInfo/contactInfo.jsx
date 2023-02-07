import { Component } from "react";
import { ReactComponent as PhoneIcon } from "./icon-phone.svg";
import { ReactComponent as EmailIcon } from "./icon-email.svg";
import { ReactComponent as AdressIcon } from "./icon-address.svg";
import "./contactInfo.css";

export class ContactInfo extends Component {
  createLinkHref = (type, info) => {
    switch (type) {
      case "tel":
        return `tel:${info}`;
      case "mail":
        return `mailto:${info}`;
      case "adress":
        const searchParam = info.toLowerCase();
        const regex = /[^\w\s]/gi;
        const newstr = searchParam
          .replaceAll(regex, "")
          .replaceAll(/\s/gi, "+");
        return `https://www.google.com/maps/place/${newstr}`;
      default:
        break;
    }
  };
  chooseImage = (type) => {
    switch (type) {
      case "tel":
        return <PhoneIcon role="phoneIcon" />;
      case "mail":
        return <EmailIcon role="emailIcon" />;
      case "adress":
        return <AdressIcon role="adressIcon" />;
      default:
        break;
    }
  };

  render() {
    const { type, border, className, children } = this.props;
    return (
      <li className={`contact-info ${className}`}>
        <a
          href={this.createLinkHref(type, children)}
          className="contact-info__item"
          target="_blank"
          rel="noreferrer"
        >
          <span className={`contact__icon ${border ? "framed" : ""}`}>
            {this.chooseImage(type)}
          </span>
          {children}
        </a>
      </li>
    );
  }
}
