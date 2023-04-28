import React, { useState } from "react";
import logo from "../../assets/imgs/alu-logo.png";
import { GrInstagram, GrYoutube, GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import "./LoginPage.scss";
import { useLocation, useNavigate } from "react-router-dom";
import * as Api from "../../api";
import useCurrentUser from "../../hooks/useCurrentUser";
import Login from "../../components/Auth/Login/Login";
import Register from "../../components/Auth/Register/Register";
import Spinner from "../../components/Spinner";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, loading } = useCurrentUser();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const { from } = location.state || { from: { pathname: "/" } };

  const initiateGoogleLogin = async () => {
    try {
      const data = await Api.googleLogin(from);

      if (data) {
        navigate({ to: from });
      }
      // Redirect to the previous page or to the home page
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (currentUser) {
    navigate(from);
    return null;
  }

  return (
    <>
      <div className="login-container">
        <div className="descriptionContainer">
          <h1>Opportunities Board</h1>
          <br />
          <p>
            The SPD Team empowers students to navigate their long-term career
            paths by equipping them with the right tools, skills, and mindsets
            which enables them in turn to source, secure and excel in their
            annual internships during their time at ALU as well as beyond in
            targetted full time opportunities.
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
            <p>Login via Google or Email </p>
            <div className="flex my-2">
              <button
                className="loginButton px-4 py-2"
                type="button"
                onClick={initiateGoogleLogin}
              >
                <span className="me-2 text-xl">
                  <FcGoogle />
                </span>
                <span> Google </span>
              </button>
              <button
                className="loginButton px-4 py-2"
                type="button"
                onClick={handleOpenLoginModal}
              >
                <span className="me-2 text-xl">
                  <MdEmail />
                </span>
                <span> Email </span>
              </button>
            </div>
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

      <Login
        isLoginModalOpen={isLoginModalOpen}
        handleCloseLoginModal={handleCloseLoginModal}
        handleOpenRegisterModal={handleOpenRegisterModal}
      />

      <Register
        isRegisterModalOpen={isRegisterModalOpen}
        handleCloseRegisterModal={handleCloseRegisterModal}
        handleOpenLoginModal={handleOpenLoginModal}
      />
    </>
  );
}

export default LoginPage;
