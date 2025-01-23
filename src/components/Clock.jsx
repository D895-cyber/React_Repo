import React, { useEffect, useState } from 'react';

function ClockAndStopwatch() {
  // State for current time
  const [Time, SetTime] = useState(new Date());

  // State for stopwatch
  const [stopwatchTime, setStopwatchTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      SetTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update the stopwatch if running
  useEffect(() => {
    let stopwatchInterval;
    if (isRunning) {
      stopwatchInterval = setInterval(() => {
        setStopwatchTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(stopwatchInterval);
  }, [isRunning]);

  // Format stopwatch time as HH:MM:SS
  const formatStopwatchTime = () => {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
      {/* Display Clock */}
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        <div>{Time.toLocaleDateString()}</div>
        <div>{Time.toLocaleTimeString()}</div>
      </div>

      {/* Stopwatch Section */}
      <div style={{ marginTop: '20px' }}>
        <h2>Stopwatch</h2>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>
          {formatStopwatchTime()}
        </div>
        <button
          onClick={() => setIsRunning(true)}
          style={{ marginRight: '10px', padding: '5px 10px' }}
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          style={{ marginRight: '10px', padding: '5px 10px' }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setStopwatchTime(0);
          }}
          style={{ padding: '5px 10px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ClockAndStopwatch;
