import React, { useState } from "react";
import "./App.css";
import DutyReport from "./components/DutyReport";
import { number, yearOptions } from "./test";

function App() {
  const [engineSize, setEngineSize] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [vehiclePrice, setVehiclePrice] = useState(null);
  const [waitingInput, setWaitingInput] = useState("waiting for details...");
  const [toggleReport, setToggleReport] = useState(false);

  const handleCalculate = () => {
    // const result = number(engineSize); // Pass the selected year to the function
    setSelectedYear(selectedYear);
    setEngineSize(engineSize);
    setVehiclePrice(vehiclePrice);
    setToggleReport(true);
  };

  //change year state on the typing the year
  const handleYearSelect = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="container">
      <h2>Car Details</h2>
      <div className="input-group">
        <label htmlFor="year">Year of Make:</label>
        <select id="year" onChange={handleYearSelect} value={selectedYear}>
          <option value="">Select Year</option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group">
        <label htmlFor="engineSize">Engine Size:</label>
        <input
          type="number"
          id="engineSize"
          placeholder="Enter Engine Size"
          onChange={(e) => setEngineSize(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="price">Vehicle Price</label>
        <input
          type="number"
          id="price"
          placeholder="Enter vehicle price"
          onChange={(e) => setVehiclePrice(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <div className="result">
        {toggleReport ? (
          <DutyReport
            selectedYear={selectedYear}
            engineSize={engineSize}
            vehiclePrice={vehiclePrice}
          />
        ) : (
          waitingInput
        )}
      </div>
    </div>
  );
}

export default App;
