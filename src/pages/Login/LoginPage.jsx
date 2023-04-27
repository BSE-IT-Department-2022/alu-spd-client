import React, { useState } from "react";
import logo from "../../assets/imgs/alu-logo.png";
import imageStudent from "../../assets/imgs/opp.png";
import { GrInstagram, GrYoutube, GrLinkedin } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import "./LoginPage.scss";
import { useLocation, useNavigate } from "react-router-dom";
import * as Api from "../../api";
import useCurrentUser from "../../hooks/useCurrentUser";
import Modal from "../../components/Common/Modal/Modal";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, loading } = useCurrentUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

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

  const toogleAuthModal = () => {
    const modal = document.getElementById("authModal");
    modal.classList.toggle("show");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (currentUser) {
    navigate(from);
    return null;
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleOpenSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const handleCloseSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                onClick={handleOpenModal}
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
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={imageStudent}
              width={800}
              height={800}
              alt="Example"
              className="w-full lg:h-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-16 w-auto"
                  src={logo}
                  alt="ALU Logo"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="#"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Don’t have an account?{" "}
                  <button
                    onClick={() => {
                      handleCloseModal();
                      handleOpenSignInModal();
                    }}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Join the community
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isSignInModalOpen} onClose={handleCloseSignInModal}>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={imageStudent}
              width={800}
              height={800}
              alt="Example"
              className="w-full lg:h-full h-auto object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-16 w-auto"
                  src={logo}
                  alt="ALU Logo"
                />
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign up to your account
                </h2>
              </div>

              <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        id="firtName"
                        name="firstName"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign up
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      handleCloseSignInModal();
                      handleOpenModal();
                    }}
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginPage;
