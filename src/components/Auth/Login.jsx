import React, { useState } from "react";

const Login = () => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center text-white"
        >
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-shadow-gray-400"
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-shadow-gray-400 mt-2 "
            type="password"
            placeholder="password"
            name="password"
          />
          <button className="text-white border-none outline-none bg-emerald-600 hover:bg-emerald-800  text-xl py-3 px-5 rounded-full mt-5">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
