const DutyReport = (props) => {
  const { selectedYear, engineSize, vehiclePrice } = props;

  return (
    <>
      <h2>RESULT SUMMARY</h2>

      <p>with a {selectedYear} car</p>
      <p>Engine Size: {engineSize}</p>
      <p>Vehicle Price: {vehiclePrice}</p>
      <p>duty:</p>
      <p>excise:</p>
      <p>VAT:</p>
    </>
  );
};

export default DutyReport;
