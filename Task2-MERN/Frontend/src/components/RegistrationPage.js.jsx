import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;

    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting the form

    try {
      const response = await axios.post(
        "https://https://test-58j0.onrender.com/register",
        registrationData
      );
      setSuccessMessage("Registration successful!, Redirecting to login...");
      setErrorMessage("");
      console.log(response.data);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Registration failed. Account already exists.");
      console.log(error);
    } finally {
      setLoading(false);
      setRegistrationData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4 font-bold">Registration Form</h1>
        {loading && (
          <div className="font-bold text-lg text-blue-500 mb-4">
            It may take some time, depending upon response time of my backend
            hosting service(free one)
          </div>
        )}
        {successMessage && (
          <div className="font-bold text-lg text-green-500 mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleRegistrationSubmit}>
          <div className="mb-4">
            <input
              className="border p-2 w-full"
              type="text"
              name="username"
              placeholder="Username"
              value={registrationData.username}
              onChange={handleRegistrationChange}
              required
            />
          </div>

          <div className="mb-4">
            <input
              className="border p-2 w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={registrationData.password}
              onChange={handleRegistrationChange}
              required
            />
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="mt-4">
            Already registered?{" "}
            <Link to="/login" className="text-blue-500">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
