import React, { Component } from "react";
import github from "./git.png";
import linkedin from "./chain.png";
import "./FooterCSS.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer-div">
          <br></br>
          <p class="rights">
            @ {"2024Movies World . All Rights Reserved."}
          </p>
          <br></br>
          <div class="icons">
            <a
              class="tooltiptext"
              href="https://github.com/MARIAMDARAWSHY"
              target="_blank"
            >
              <img src={github} alt="" />
            </a>
            <a
              class="tooltiptext"
              href="https://www.linkedin.com/in/MARIAMDARAWSHY-9073942bb/"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
