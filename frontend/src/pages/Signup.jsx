import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setMessage(data.message || "Signup failed");

      if (res.ok) {
        navigate("/dashboard");
      }
    } catch (err) {
      setMessage("Signup failed due to server error");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful ✅");
        navigate("/dashboard");
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      setMessage("Login failed due to server error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-green-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-700">
          TripSage
        </h1>
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
          Signup / Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-green-300 p-2 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-green-300 p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <div className="flex gap-4">
          <button
            onClick={handleSignup}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full transition"
          >
            Signup
          </button>
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full transition"
          >
            Login
          </button>
        </div>

        {message && (
          <p className="mt-4 text-center text-gray-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
