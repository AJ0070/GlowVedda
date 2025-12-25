import React, { useEffect, useState } from 'react';

const SnowEffect = () => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
        const snowflakeCount = 50;
        const newSnowflakes = Array.from({ length: snowflakeCount }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random(),
            size: `${Math.random() * 10 + 5}px`
        }));
        setSnowflakes(newSnowflakes);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute bg-white rounded-full opacity-80"
                    style={{
                        left: flake.left,
                        top: '-10px',
                        width: flake.size,
                        height: flake.size,
                        opacity: flake.opacity,
                        animation: `fall ${flake.animationDuration} linear infinite ${flake.animationDelay}`
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes fall {
                    0% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(100vh);
                    }
                }
            `}</style>
        </div>
    );
};

export default SnowEffect;
