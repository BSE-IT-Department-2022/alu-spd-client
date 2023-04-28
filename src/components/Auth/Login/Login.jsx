import React, { useState } from "react";
import "./Login.scss";
import Modal from "../../Common/Modal/Modal";
import imageStudent from "../../../assets/imgs/opp.png";
import logo from "../../../assets/imgs/alu-logo.png";
import * as Api from "../../../api";
import { toast } from "react-toastify";

const JoinButton = ({
  text,
  handleCloseLoginModal,
  handleOpenRegisterModal,
}) => {
  return (
    <button
      onClick={() => {
        handleCloseLoginModal();
        handleOpenRegisterModal();
      }}
      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    >
      {text}
    </button>
  );
};

const Login = ({
  isLoginModalOpen,
  handleCloseLoginModal,
  handleOpenRegisterModal,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };

    const userLogin = await Api.login(userData);
    if (userLogin.error) {
      toast.error(userLogin.error);
    } else {
      toast.success("Login successful");
      handleCloseLoginModal();
    }
  };

  return (
    <div className="login">
      <Modal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal}>
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
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-2">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-16 w-auto"
                  src={logo}
                  alt="ALU Logo"
                />
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
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
                        onChange={onChange}
                        value={email}
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
                        <button
                          to="/forgot-password"
                          className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </button>
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
                        onChange={onChange}
                        value={password}
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
                  <JoinButton
                    text="Join the community"
                    handleCloseLoginModal={handleCloseLoginModal}
                    handleOpenRegisterModal={handleOpenRegisterModal}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
