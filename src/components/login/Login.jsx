import React from "react";
import logo from "../../assets/imgs/alu-logo.png";
import { GrInstagram, GrYoutube, GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="descriptionContainer">
        <h1>Opportunities Board</h1>
        <br />
        <p>
          The SPD Team empowers students to navigate their long-term career
          paths by equipping them with the right tools, skills, and mindsets
          which enables them in turn to source, secure and excel in their annual
          internships during their time at ALU as well as beyond in targetted
          full time opportunities.
        </p>
      </div>
      <div className="loginDiv">
        <img src={logo} width={200} alt="" />
        {/* TODO: ALC LOGO AND SPACE */}
        {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <img src={logo} width={100} alt="" /> */}
        <h4>
          African Leadership University
          <br />
          Student Professional Development
        </h4>
        <br />
        <div className="loginDivContent">
          <p>Login with your student email </p>
          <button
            className="loginButton"
            type="button"
            onClick={() => console.log("clicked")}
          >
            <FcGoogle />
            &nbsp; ALU Login
          </button>
        </div>
      </div>
      <div className="spareDiv"></div>
      <div className="footerDiv">
        <div className="footerContainer">
          <h4>Let's build the future together!</h4>
          <div className="footerLinkDiv">
            <span className="material-icons">
              <GrInstagram />
            </span>
            <a href="https://www.instagram.com/alu_professionaldev/">
              Instagram
            </a>
          </div>
          <div className="footerLinkDiv">
            <span className="material-icons">
              <GrLinkedin />
            </span>
            <a href="https://www.linkedin.com/company/alu-professionaldev">
              LinkedIn
            </a>
          </div>
          <div className="footerLinkDiv">
            <span className="material-icons">
              <GrYoutube />
            </span>
            <a href="https://www.youtube.com/channel/UCx1rpnoSz70WFbKuX5R5yqA">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
