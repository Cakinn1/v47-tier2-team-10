import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  getAuth,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, password);
      setError(null);
      setSuccessMessage("");
      setModalOpen(false);
      console.log("Login successfully!");
      navigate("/ProductPage");
    } catch (error) {
      setError("Invalid username or password. Please try again.");
      console.error("Login failed:", error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, username);
      setError(null);
      setSuccessMessage("Password reset email sent successfully!");
      // setModalOpen(false);
    } catch (error) {
      setError("Failed to send a password reset email. Please try again.");
      setSuccessMessage("");
      console.error("Password reset failed:", error);
    }
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setSuccessMessage("");
  };

  return (
    <div className="justify-center">
      <button
        onClick={openModal}
        className="bg-green-500  text-white px-4 py-2 duration-300 rounded-md hover:bg-[#2d8630]"
      >
        Login
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="absolute bg-black opacity-50  inset-0"
            onClick={closeModal}
          ></div>
          <div className="max-w-md mx-auto p-4 bg-white w-[500px] flex flex-col  py-12 shadow-md rounded-md relative z-10">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="username"
                  className="block mr-auto text-sm font-medium text-gray-600"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="password"
                  className="block text-sm mr-auto font-medium text-gray-600"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {successMessage && (
                <p className="text-green-500 mb-4">{successMessage}</p>
              )}
              <div className="flex space-x-2 flex-1">
                <button
                  type="submit"
                  onClick={handleLogin}
                  className="bg-green-500 w-full text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
