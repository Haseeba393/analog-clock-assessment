import { useEffect, useState } from 'react';

const useClock = (timestamp?: number) => {
  const [time, setTime] = useState(
    timestamp ? new Date(timestamp * 1000) : new Date(),
  );

  useEffect(() => {
    if (timestamp) {
      setTime(new Date(timestamp * 1000));
    }
  }, [timestamp]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        const next = new Date(prev);

        next.setSeconds(next.getSeconds() + 1);

        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //   Getting the time from the date
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  return {
    seconds,
    minutes,
    hours,
  };
};

export default useClock;
