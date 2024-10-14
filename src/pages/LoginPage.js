import React, { useState } from 'react';
import './LoginPage.css';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, rememberMe });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo">
                    <img src="/logo.svg" alt="logo" />
                </div>
                <h2>Sign in to your account</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="form-options">
                        <div>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label> Remember me</label>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-button">
                        Sign in
                    </button>
                </form>
                <div className="or-container">
                    <hr className="divider" />
                    <span>Or continue with</span>
                    <hr className="divider" />
                </div>
                <div className="social-login">
                    <button className="social-button google">
                        <FaGoogle /> Google
                    </button>
                    <button className="social-button github">
                        <FaGithub /> GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
