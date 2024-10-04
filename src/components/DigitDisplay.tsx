// DigitDisplay.tsx
import React from "react";
import AnalogClock from "./AnalogClock";
import { clockDigitsConfig } from "../clockDigitsConfig";

interface DigitDisplayProps {
  digit: number;
}

const DigitDisplay: React.FC<DigitDisplayProps> = ({ digit }) => {
  const clockGrid = clockDigitsConfig[digit];

  return (
    <div className="digit-display">
      {clockGrid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((clock, colIndex) => (
            <AnalogClock key={colIndex} hour={clock[0]} minute={clock[1]} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default DigitDisplay;
