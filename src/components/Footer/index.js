import React from "react";
import style from "./style.scss";
import { Cat } from "react-kawaii";

const Footer = () => {
  return (
    <div id="footer-footer">
      <footer class="footer-distributed">
        <div class="footer-left">
          <p id="footer-contact">Contact Us</p>

          <form
            action="https://formspree.io/hakanyildiz248@gmail.com"
            method="POST"
          >
            <input type="email" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </div>
        <br />
        <br />
        <div class="footer-right">
          <h3>
            <span>
              <Cat size={60} mood="excited" color="#8f919b" />
            </span>
            <a href="#">
              Git<span>Camp !</span>
            </a>
          </h3>

          <span class="footer-company-name">
            Copyright &copy; 2019. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
