import React from "react";
import "./style.scss";
import { Backpack, Cat } from "react-kawaii";

const Footer = () => {
  return (
    <div id="footer-footer">
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            <span>
              <Cat size={90} mood="excited" color="#8f919b" />
            </span>
            git<span>Camp !</span>
          </h3>

          <span class="footer-company-name">
            Copyright &copy; 2019. All Rights Reserved.
          </span>
        </div>

        <div class="footer-right">
          <p id="footer-contact">Contact Us</p>

          <form action="#" method="post">
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <button>Send</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
