import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center my-7">Login</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-90 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have account?</p>
        <Link to={"/signup"}>
          <span className="text-red-500 font-semibold">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
