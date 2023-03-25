import React from "react"
import '../App.css'
import { Link } from "react-router-dom"
import { useState } from "react"
import { setCookie } from "../cookie";
import { clearCookie } from "../cookie";
import { getToken } from "../cookie";
import axios from "axios";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(getToken());
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
  };

  function handleLogout() {
    clearCookie();
    setIsLoggedIn(false);
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="bg-blue-900 text-white sticky top-0">
      <div className="container mx-auto px-4 py-3 md:flex md:justify-between md:items-center ">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">
          <img src="logojobsku.png" alt="Logo JobsKU" className="w-auto h-8 md:h-10 mr-2 md:mr-4" />
          </Link>
          <button
            className="px-3 py-2 md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center`}
        >
          <a
            href="/"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6"
          >Beranda</a>
          <a
            href="#fitur"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6"
          >Fitur</a>
          <a
            href="#lowongankerja"
            className="block mt-4 md:inline-block md:mt-0 md:ml-6"
          >Lowongan</a>
          
          {isLoggedIn ? (
  <a className="block mt-4 md:inline-block md:mt-0 md:ml-6">
    <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
  </a>
) : (
  <a className="block mt-4 md:inline-block md:mt-0 md:ml-6">
    <button onSubmit={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    <Link to="/login">
            Login
          </Link>
    </button>
  </a>
)} 
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar