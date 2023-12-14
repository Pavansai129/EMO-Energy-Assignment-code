// RegistrationForm.js

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

let usersDataList = [];

const Signup = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    showErrorMessage: false,
    errorMessage: "",
  });
  const onChangeFirstName = (event) => {
    setFormData({ ...formData, firstName: event.target.value });
  };
  const onChangeLastName = (event) => {
    setFormData({ ...formData, lastName: event.target.value });
  };
  const onChangeEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const onChangePassword = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };
  const onChangeConfirmPassword = (event) => {
    setFormData({ ...formData, confirmPassword: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { history } = props;
    setFormData({ ...formData, showErrorMessage: false });
    const usersList = localStorage.getItem("usersList");
    let parsedUsersList = JSON.parse(usersList);

    const userDetails = {
      userId: uuid(),
      name: formData.firstName + " " + formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    if (parsedUsersList === null) {
      if (formData.password === formData.confirmPassword) {
        usersDataList.push(userDetails);
        localStorage.setItem("usersList", JSON.stringify(usersDataList));
        history.replace("/");
      } else {
        setFormData({
          ...formData,
          showErrorMessage: true,
          errorMessage: "Password did not match",
        });
      }
    } else {
      usersDataList = parsedUsersList;
      const isUserIn = usersDataList.find(
        (eachUser) => eachUser.email === formData.email
      );
      if (isUserIn === undefined) {
        if (formData.password === formData.confirmPassword) {
          usersDataList.push(userDetails);
          localStorage.setItem("usersList", JSON.stringify(usersDataList));
          history.replace("/");
        } else {
          setFormData({
            ...formData,
            showErrorMessage: true,
            errorMessage: "Password did not match",
          });
        }
      } else {
        setFormData({
          ...formData,
          showErrorMessage: true,
          errorMessage: "Email already exist",
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg w-full"
      >
        <h2 className="text-2xl mb-4 text-center">Registration Form</h2>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
              onChange={onChangeFirstName}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
              onChange={onChangeLastName}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={onChangeEmail}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={onChangePassword}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            className="w-full px-3 py-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
            onChange={onChangeConfirmPassword}
            required
          />
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
        {formData.showErrorMessage && (
          <p className="text-red-500 mt-3">*{formData.errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Signup;
