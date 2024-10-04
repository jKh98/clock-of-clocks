import React, { useState, useEffect } from "react";
import DigitDisplay from "./DigitDisplay";
import AnalogClock from "./AnalogClock";

const ClockDisplay: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeDigits = () => {
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    return [...hours, ":", ...minutes, ":", ...seconds];
  };

  const renderSeparator = () => (
    <div className="row">
      <div className="separator">
        <AnalogClock hour={0} minute={0} />
        <AnalogClock hour={3} minute={6} />
        <AnalogClock hour={0} minute={3} />
        <AnalogClock hour={3} minute={6} />
        <AnalogClock hour={0} minute={3} />
        <AnalogClock hour={0} minute={0} />
      </div>
      <div className="separator">
        <AnalogClock hour={0} minute={0} />
        <AnalogClock hour={6} minute={9} />
        <AnalogClock hour={0} minute={9} />
        <AnalogClock hour={6} minute={9} />
        <AnalogClock hour={0} minute={9} />
        <AnalogClock hour={0} minute={0} />
      </div>
    </div>
  );

  const renderIdleRows = () => (
    <div className="column">
      {[...Array(3)].map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {[...Array(36)].map((_, colIndex) => (
            <AnalogClock key={colIndex} hour={0} minute={0} />
          ))}
        </div>
      ))}
    </div>
  );

  const renderIdleColumn = () => (
    <div className="column">
      {[...Array(6)].map((_, index) => (
        <AnalogClock key={index} hour={0} minute={0} />
      ))}
    </div>
  );

  const timeDigits = getTimeDigits();

  return (
    <div className="column">
      {renderIdleRows()}
      <div className="row">
        {renderIdleColumn()}
        {timeDigits.map((char, index) =>
          char === ":" ? (
            <div key={index}>{renderSeparator()}</div>
          ) : (
            <DigitDisplay key={index} digit={parseInt(char)} />
          )
        )}
        {renderIdleColumn()}
      </div>
      {renderIdleRows()}
    </div>
  );
};

export default ClockDisplay;
