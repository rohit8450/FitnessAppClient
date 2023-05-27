import React,{useState} from 'react';

const MeditatioinApp = () => {

 const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setTimeRemaining(300); // Set initial time to 5 minutes (300 seconds)
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTimeRemaining(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const tick = () => {
    if (timeRemaining > 0) {
      setTimeRemaining((prevTime) => prevTime - 1);
    } else {
      setIsRunning(false);
    }
  };

  React.useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        tick();
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return (
    <div>
      <h2>Meditation Practice</h2>
      <div>
        <div className="timer">{formatTime(timeRemaining)}</div>
        {isRunning ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <>
            {timeRemaining > 0 ? (
              <button onClick={handleStart}>Start</button>
            ) : (
              <button onClick={handleReset}>Reset</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MeditatioinApp
