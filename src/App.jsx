import React, { useState } from "react";
import "./App.css";
import DutyReport from "./components/DutyReport";
import { vehicleAgeCalc, calcDutyVat, exciseCalc, yearOptions } from "./test";

function App() {
  const [engineSize, setEngineSize] = useState(null);
  const [selectedYear, setSelectedYear] = useState("");
  const [vehiclePrice, setVehiclePrice] = useState(null);
  const [toggleReport, setToggleReport] = useState(false);
  const [error, setError] = useState(null);
  const [excise, setExcise] = useState(null);
  const [dutyVat, setDutyVat] = useState(null);
  // const [inputValue, setInputValue] = useState(""); // Thinking of formatting the number entered
  const waitingInput = "waiting for details...";
  // Thinking of formatting the number entered
  // const formattedVehiclePriceInput = new Intl.NumberFormat().format(
  //   vehiclePrice
  // );
  // console.log(typeof formattedVehiclePriceInput);
  // const result = number(engineSize); // Pass the selected year to the function
  const handleCalculate = () => {
    if (!selectedYear || !engineSize || !vehiclePrice) {
      setError(true);
      setToggleReport(false);
      return;
    }
    setError(false);
    vehicleAgeCalc(selectedYear);
    setExcise(exciseCalc(engineSize, vehiclePrice));
    setDutyVat(calcDutyVat(vehiclePrice));

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
          min="322"
          max="8000"
          id="engineSize"
          placeholder="1500cc"
          onChange={(e) => setEngineSize(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="vehiclePrice">Vehicle Price (MWK)</label>
        <input
          type="number"
          id="vehiclePrice"
          placeholder="Enter vehicle price"
          onChange={(e) => setVehiclePrice(e.target.value)}

          // value={inputValue} //Thinking of formatting the number entered
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <div className="error">{error ? "Please fill in all fields" : null}</div>
      <div className="result">
        {toggleReport ? (
          <DutyReport
            selectedYear={selectedYear}
            engineSize={engineSize}
            vehiclePrice={vehiclePrice}
            excise={excise}
            dutyVat={dutyVat}
          />
        ) : (
          waitingInput
        )}
      </div>
    </div>
  );
}

export default App;
