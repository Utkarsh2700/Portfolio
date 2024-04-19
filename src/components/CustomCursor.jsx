import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setXPos(event.clientX);
            setYPos(event.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const cursorStyle = {
        position: 'fixed',
        top: yPos + 'px',
        left: xPos + 'px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'white',
        zIndex: 999,
        pointerEvents: 'none',
    };

    return <div style={cursorStyle} />;
};

export default CustomCursor;
