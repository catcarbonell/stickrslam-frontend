import React from 'react';
import spinner from '../../assets/spinner.png';
import './Spinner.css';

export default () => (
    <div className="spinner">
        <img src={spinner} alt="Loading" />
    </div>
);