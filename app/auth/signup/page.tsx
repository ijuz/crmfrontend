// app/auth/signup/page.tsx
import React from "react";

const SignupPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <form className="mt-4">
        <div>
          <label htmlFor="name" className="block text-sm">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="email" className="block text-sm">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="mt-2">
          <label htmlFor="password" className="block text-sm">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white p-2 rounded"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
