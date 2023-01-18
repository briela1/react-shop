import React from 'react';
import '@styles/NotFound.scss';

import error from '@logos/404 Error.svg';

const NotFound = () => {
    return (
        <div className="login">
            <div className="form-container">
                <div className="email-image">
                    <img src={error} alt="404" />
                </div>
                <h1 className="title">Oops!</h1>
                <p className="subtitle">We can't seem to find the page you're looking for.</p>
                <button className="primary-button login-button">Go back</button>
            </div>
        </div>
    );
};

export default NotFound;