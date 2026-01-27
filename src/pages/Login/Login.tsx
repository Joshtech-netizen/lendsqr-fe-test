import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
// Make sure these paths match your file structure exactly
import illustration from '../../assets/pablo-sign-in 1.svg';
import logo from '../../assets/Group.svg';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For the assessment, navigate to dashboard on submit
    navigate('/dashboard');
  };

  return (
    <div className={styles.loginPage}>
      {/* Left Section: Logo & Illustration */}
      <div className={styles.leftPanel}>
        <img src={logo} alt="Lendsqr Logo" className={styles.logo} />
        <div className={styles.illustrationWrapper}>
          <img src={illustration} alt="Sign In Illustration" />
        </div>
      </div>

      {/* Right Section: Login Form */}
      <div className={styles.rightPanel}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Welcome!</h1>
          <p className={styles.subtitle}>Enter details to login.</p>

          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Email" required />
            </div>

            <div className={styles.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className={styles.showHideBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>

            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>

            <button type="submit" className={styles.loginBtn}>
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;