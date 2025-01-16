import React from "react";
import "./styles.css";

function RegistrationForm() {
  return (
    <div className="registration-container">
      <div className="form-section">
      <div className="headerInfo">
            <span className="hInfo">Login</span> | <span className="hInfo">Register</span>
        </div>
        <header>Bonjour embut</header>
        <p>Isi form dibawah buat login</p>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Введите ваш email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Введите ваш пароль" />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Ingat saya</label>
          </div>
          <button type="submit" className="btn-submit">
            Masuk
          </button>
        </form>
        <div className="social-login">
          <p>Atau masuk dengan</p>
          <div className="social-icons">
            <span className="socials">Facebook</span> | <span className="socials">Google</span>
          </div>
        </div>
      </div>
      <div className="image-section">
        <img
          src="https://i.pinimg.com/736x/cc/e8/07/cce8070d793a43a31ac8bfdd46a984b6.jpg"
          alt="Travel"
          className="background-image"
        />
      </div>
    </div>
  );
}

export default RegistrationForm;
