import React, { useState, useEffect } from 'react';

const TimerComponent: React.FC = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>Timer: {seconds} seconds</div>;
};

export default TimerComponent;
