import React from 'react';

import '../styles/SwitchButton.scss';

function SwitchButton({themeSwitch, themeFunc}) {

return (
    <div className="container-switch">
        <span className="text">{themeSwitch ? 'Light' : 'Dark'} mode</span>
        <label className="switch">
           <input id="checkbox" type="checkbox" name="checkbox" checked={themeSwitch} onChange={themeFunc} />
            <span className="slider round"></span>
        </label>
    </div>
);
}

export default SwitchButton;
