import React, { useEffect, useState } from "react";

export const Time = () => {
  const [count, setCount] = useState(0);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const deadline = "December, 31, 2023";

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 100);
  }, [count, setCount]);
  function startStop() {
    setCount(0);
  }
  function resert() {
    setCount(0);
  }
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>START</button>
      <button>{count}</button>
      <button onClick={startStop}>STOP</button>
      <button onClick={resert}>RESERT</button>
    </div>
  );
};
