import React, { useState } from "react";
import "./Register.scss";
import Modal from "../../Common/Modal/Modal";
import imageStudent from "../../../assets/imgs/opp.png";
import logo from "../../../assets/imgs/alu-logo.png";
import * as Api from "../../../api";
import { toast } from "react-toastify";

const SignInButton = ({
  text,
  handleCloseRegisterModal,
  handleOpenLoginModal,
}) => {
  return (
    <button
      onClick={() => {
        handleCloseRegisterModal();
        handleOpenLoginModal();
      }}
      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    >
      {text}
    </button>
  );
};

const Register = ({
  isRegisterModalOpen,
  handleCloseRegisterModal,
  handleOpenLoginModal,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { firstName, lastName, email, password, passwordConfirm } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("clicked");

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        passwordConfirm,
      };

      const newUser = await Api.register(userData);
      if (newUser) {
        toast.success("Successfully registered! Login to continue.");
        handleCloseRegisterModal();
        handleOpenLoginModal();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="register">
      <Modal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal}>
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
          <div className="w-full lg:w-1/2 p-2">
            <div className="flex min-w-fit flex-1 flex-col justify-center px-2 py-2">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-16 w-auto"
                  src={logo}
                  alt="ALU Logo"
                />
                <h3 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Create an account
                </h3>
              </div>

              <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
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
                        value={firstName}
                        onChange={onChange}
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
                        value={lastName}
                        onChange={onChange}
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
                        value={email}
                        onChange={onChange}
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
                        value={password}
                        onChange={onChange}
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
                        value={passwordConfirm}
                        onChange={onChange}
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
                  <SignInButton
                    text="Sign in"
                    handleOpenLoginModal={handleOpenLoginModal}
                    handleCloseRegisterModal={handleCloseRegisterModal}
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

export default Register;
