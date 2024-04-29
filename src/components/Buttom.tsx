import React, { useState } from 'react';
import '../styles/button.scss';

const Button: React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <button className={clicked ? 'button clicked' : 'button'} onClick={handleClick}>
            Click me!
        </button>
    );
};

export default Button;
