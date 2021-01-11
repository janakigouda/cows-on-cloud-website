import React from 'react';

export default function Login() {
    return (
        <div className="login">
            <div className="login-container">
                <div className="login-main">
                    <div className="login-name">
                        <div>Login</div>
                    </div>
                    <div className="login-body">
                        <div className="input-body">
                            <input type="email" placeholder="Enter Email *" className="input" />
                            <input type="password" placeholder="*******" className="input" />
                        </div>
                        <div className="button">
                            <div className="button-container">
                                <a href="/#" className="login-btn">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}