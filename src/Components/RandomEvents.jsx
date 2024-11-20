import React, { useState, useEffect } from 'react';

const RandomEvents = () => {
  const [displayText, setDisplayText] = useState('events');
  const [isRandom, setIsRandom] = useState(false);

  // Function to generate random string of characters
  const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let randomString = '';
    for (let i = 0; i < 6; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
  };

  useEffect(() => {
    // Function to start the loop of displaying random strings and then the event word
    const startCycle = () => {
      setIsRandom(true);

      // Display random strings for 2 seconds
      const interval = setInterval(() => {
        setDisplayText(generateRandomString());
      }, 100);

      // After 2 seconds, stop random strings and show the word "events"
      setTimeout(() => {
        clearInterval(interval);
        setIsRandom(false);
        setDisplayText('events');
      }, 1500);
    };

    // Start the cycle initially and then repeat every 4 seconds
    startCycle();
    const loopInterval = setInterval(() => {
      startCycle();
    }, 5000); // 2 seconds for random text + 2 seconds for "events"

    // Cleanup interval on component unmount
    return () => clearInterval(loopInterval);
  }, []);

  return (
    <div>
      <h1>{displayText}</h1>
    </div>
  );
};

export default RandomEvents;
