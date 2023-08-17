const DutyReport = (props) => {
  const { selectedYear, engineSize, vehiclePrice, excise, dutyVat } = props;
  const { duty, vat } = dutyVat;

  // converting vehicle price into integer
  const finalVehiclePrice = parseInt(vehiclePrice);
  // calculating final car cost
  const totalVehicleCost = duty + vat + excise + finalVehiclePrice;
  // converting duty,vat, excise, and vehicle price into a more readable number format

  const formattedDuty = new Intl.NumberFormat().format(duty);
  const formattedVat = new Intl.NumberFormat().format(vat);
  const formattedExcise = new Intl.NumberFormat().format(excise);
  const formattedVehiclePrice = new Intl.NumberFormat().format(vehiclePrice);
  const formattedVehicleCost = new Intl.NumberFormat().format(totalVehicleCost);

  return (
    <div className="duty-report">
      <h2>RESULT SUMMARY</h2>

      <p>With a {selectedYear} car</p>
      <p>Engine Size: {engineSize}cc</p>
      <p>Vehicle Price: MWK {formattedVehiclePrice}</p>
      <p>Duty: MWK {formattedDuty}</p>
      <p>Excise: MWK {formattedExcise}</p>
      <p>VAT: {formattedVat}</p>
      <div className="total-cost">
        TOTAL VEHICLE COST: <strong>MWK {formattedVehicleCost}</strong>
      </div>
    </div>
  );
};

export default DutyReport;
