import axios from 'axios';
import React, { useState } from 'react';
import { createAlert } from '../../utils/createAlert';

function Register() {
  const [value, setValue] = useState({
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: ''
  });

  const hdlOnChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/register', value);
      console.log(res);
      createAlert('success', 'Register Success');
    } catch (error) {
      createAlert('info', error.response.data.message);
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#101010] via-[#300a30] to-[#550c55]">
      <div className="relative w-96 p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl overflow-hidden animate-fadeIn">
        {/* Neon Background + Glowing */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-500 to-blue-600 opacity-30 blur-3xl"></div>

        {/* Title with glowing effect */}
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-wide neon-text text-shadow-xl">
          Register Now
        </h1>

        {/* Form */}
        <form onSubmit={hdlSubmit} className="space-y-5">
          {["email", "firstname", "lastname", "password", "confirmPassword"].map((field, idx) => (
            <div key={idx} className="relative">
              <input
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                type={field.includes("password") ? "password" : "text"}
                name={field}
                className="w-full p-4 bg-white/15 text-white border border-white/30 rounded-lg outline-none placeholder-white/70 transition-all focus:ring-2 focus:ring-pink-500 focus:bg-white/20 neon-input"
                onChange={hdlOnChange}
              />
            </div>
          ))}

          {/* Register Button with Hover 3D */}
          <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold p-4 rounded-lg shadow-md hover:shadow-xl hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-110 neon-button">
            🚀 Join the Future
          </button>
        </form>
      </div>

      {/* Extra CSS for Glowing Neon Effects */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .neon-text {
          text-shadow: 0px 0px 15px rgba(255, 0, 255, 0.8), 0px 0px 25px rgba(255, 0, 255, 0.6), 0px 0px 40px rgba(255, 0, 255, 0.4);
        }
        .neon-input:focus {
          box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.7);
        }
        .neon-button {
          box-shadow: 0px 8px 30px rgba(255, 0, 255, 0.6);
        }
        .neon-button:hover {
          box-shadow: 0px 10px 35px rgba(255, 0, 255, 0.9);
        }
      `}</style>
    </div>
  );
}

export default Register;
