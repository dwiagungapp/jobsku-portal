import React, { useState } from "react";
import axios from "axios";
import { setCookie } from "../cookie";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);

        // Menyimpan token ke dalam cookies
        setCookie("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });

      navigate('/');
  };

  return (
    <>

<div className="min-h-screen bg-gray-100 flex justify-center items-center">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
    <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label className="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          type="submit"
        >
          Log In
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  );
};

export default Login;