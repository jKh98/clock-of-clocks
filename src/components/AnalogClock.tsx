// AnalogClock.tsx
import React from "react";

interface AnalogClockProps {
  hour: number;
  minute: number;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ hour, minute }) => {
  const isIdle = hour === 0 && minute === 0;

  const getHandStyle = (position: number) => {
    switch (position) {
      case 0:
        return { transform: "rotate(0deg)", transition: "transform 0.5s" };
      case 3:
        return { transform: "rotate(90deg)", transition: "transform 0.5s" };
      case 6:
        return { transform: "rotate(180deg)", transition: "transform 0.5s" };
      case 9:
        return { transform: "rotate(270deg)", transition: "transform 0.5s" };
      default:
        return { transform: "rotate(0deg)", transition: "transform 0.5s" };
    }
  };

  return (
    <div className={`analog-clock ${isIdle ? "idle-clock" : ""}`}>
      <div className="clock-face">
        <div className="hand hour-hand" style={getHandStyle(hour)}></div>
        <div className="hand minute-hand" style={getHandStyle(minute)}></div>
      </div>
    </div>
  );
};

export default AnalogClock;
