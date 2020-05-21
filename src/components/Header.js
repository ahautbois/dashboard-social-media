import React from 'react';

import '../styles/Header.scss';
import SwitchButton from './SwitchButton';


function Header({themeSwitch, themeFunc}) {
return (
    <header>
        <div className="container">
            <div className="title">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers: 23,004</p>
            </div>
            <SwitchButton themeSwitch={themeSwitch} themeFunc={themeFunc} />
        </div>
    </header>
);
}

export default Header;
