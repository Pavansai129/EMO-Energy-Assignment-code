import Cookies from "js-cookie";
import { Link, Redirect } from "react-router-dom";
import { IoLogoBuffer } from "react-icons/io5";
import { useState } from "react";

const Login = (props) => {
  const accessToken = Cookies.get("access_token");

  const [userDetails, setUserDetails] = useState({
    userMail: "",
    userPassword: "",
    showPassword: false,
    showErrorMessage: false,
    errorMessage: "",
  });

  const onClickShowPassword = () => {
    setUserDetails({ ...userDetails, showPassword: !userDetails.showPassword });
  };
  const onChangeUserMail = (event) => {
    setUserDetails({ ...userDetails, userMail: event.target.value });
  };

  const onChangeUserPassword = (event) => {
    setUserDetails({ ...userDetails, userPassword: event.target.value });
  };

  const onSuccessfulLogin = (data) => {
    const { history } = props;
    Cookies.set("access_token", data.Token, { expires: 30 });
    history.replace("/");
  };

  const onFailureLogin = (data) => {
    setUserDetails({
      ...userDetails,
      showErrorMessage: true,
      errorMessage: data.message,
    });
  };

  const onClickLogin = async (event) => {
    event.preventDefault();
    const userLoginDetails = {
      email: userDetails.userMail,
      password: userDetails.userPassword,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userLoginDetails),
    };

    const apiUrl = "http://restapi.adequateshop.com/api/authaccount/login";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    console.log(response);
    if (data.data !== null) {
      onSuccessfulLogin(data);
    } else {
      onFailureLogin(data);
    }
  };

  if (accessToken !== undefined) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <IoLogoBuffer
            size="50"
            className="w-full text-indigo-600 block text-center"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onClickLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={userDetails.userMail}
                onChange={onChangeUserMail}
                autoComplete="email"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={userDetails.showPassword ? "text" : "password"}
                value={userDetails.userPassword}
                onChange={onChangeUserPassword}
                autoComplete="current-password"
                required
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="flex items-center">
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                onClick={onClickShowPassword}
              />
              <label
                htmlFor="checkbox"
                className="block text-sm font-medium leading-6 text-gray-900 ml-1"
              >
                Show Password
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
            {userDetails.showErrorMessage && <p>{userDetails.errorMessage}</p>}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member? <Link to="/signup">Sign up here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
