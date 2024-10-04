// App.tsx
import React from "react";
import ClockDisplay from "./components/ClockDisplay";
import "./App.css"; // Assuming your styles are in App.css

const App: React.FC = () => {
  return (
    <div className="app">
      <ClockDisplay />
    </div>
  );
};

export default App;
