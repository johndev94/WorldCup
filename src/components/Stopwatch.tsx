import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    let interval: ReturnType<typeof setInterval>;

    useEffect(() => {

        function updateTimer() {
            setTime(prevTime => prevTime + 1);
        }

        if (running) {
            interval = setInterval(updateTimer, 1000);
        } else {
            clearInterval(interval);
        }

        return function cleanup() {
            clearInterval(interval);
        };
    }, [running]);

    function startTimer() {
        setRunning(true);
    }

    function stopTimer() {
        setRunning(false);
    }

    function resetTimer() {
        setTime(0);
    }

    return (
        <div>
            <div>Time: {time} seconds</div>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Stopwatch;
