import React, { useState } from "react";
import authorizedUsers from "../assets/authorizedUsers.json";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { setCookie, getCookie } from "../utils/cookies";

function Login() {
  const [officerID, setOfficerID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (getCookie("username")) navigate("/general");
  const handleLogin = (event) => {
    event.preventDefault();

    const user = authorizedUsers.find(
      (user) => user.officerId === parseInt(officerID)
    );

    if (!user) {
      setError("Invalid officer ID or password.");
      return;
    }

    bcrypt.compare(password, user.hash, (err, result) => {
      if (err) {
        setError("An error occurred while verifying your password.");
        return;
      }

      if (!result) {
        setError("Invalid officer ID or password.");
        return;
      }

      setCookie("username", user.Name, 1);
      setCookie("role", user.role, 1);
      navigate("/general"); // Navigate to the dashboard route
    });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 align-center text-center">
      <div className="mx-auto max-w-lg flex flex-wrap justify-center">
        <img
          src="/assets/image/hackLogo.png"
          className="h-32 rounded-full my-16"
        />
        <h1 className="text-center text-2xl w-full font-bold  text-indigo-600 sm:text-3xl">
          Log in to your account
        </h1>

        <form
          onSubmit={handleLogin}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="officerID" className="sr-only">
              Officer ID
            </label>

            <div className="relative">
              <input
                type="text"
                className={`w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm ${
                  error ? "border-red-500" : ""
                }`}
                placeholder="Enter your officer ID"
                value={officerID}
                onChange={(event) => setOfficerID(event.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className={`w-full rounded-lg
 border-gray-200 p-4 pe-12 text-sm shadow-sm ${error ? "border-red-500" : ""}`}
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Log in
          </button>
        </form>
      </div>
      <p className="text-sm text-gray-500 my-10">Team Psephologists</p>
    </div>
  );
}

export default Login;
