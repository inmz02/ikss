import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const currentTime = new Date();
      const hours = String(currentTime.getHours()).padStart(2, "0");
      const minutes = String(currentTime.getMinutes()).padStart(2, "0");

      setTime(`${hours}:${minutes}`);
    };

    updateClock();

    return () => clearInterval(setInterval(updateClock, 100));
  }, []);

  return (
    <div className="text-8xl text-white font-alfa-slab-one myClock text-center mb-8">{time}</div>
  );
};

export default Clock;
