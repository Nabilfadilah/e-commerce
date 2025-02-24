import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form action="">
          <h1>Buat Akun Anda</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-box">
            <input type="tel" placeholder="Phone Number" />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Country" />
          </div>

          <div className="register-agreement">
            <label>
              <input type="checkbox" />
              Saya setuju dengan <b>Syarat dan Ketentuan</b> serta{" "}
              <b>Kebijakan Privasi</b>
            </label>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
