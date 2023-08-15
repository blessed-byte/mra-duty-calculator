const Inputs = ()=>{
  return(
  <><h2>Car Details</h2>
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
          type="text"
          id="engineSize"
          placeholder="Enter Engine Size"
          onChange={(e) => setEngineSize(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      </>
};