//year options 100 years from 2023 to 1900
export const yearOptions = Array.from({ length: 124 }, (_, index) =>
  (2023 - index).toString()
);

// let levelOne;
// let levelTwo;
// let levelThree;
// let levelFour;
// let levelFive;
// export const number = (engineSize) => {
//   if (engineSize >= 1000 && engineSize <= 1499) {
//     console.log("num1");
//     levelOne = engineSize;
//   } else if (engineSize >= 1500 && engineSize <= 1999) {
//     console.log("num2");
//     levelTwo = engineSize;
//   } else if (engineSize >= 2000 && engineSize <= 2499) {
//     console.log("num3");
//     levelThree = engineSize;
//   } else if (engineSize >= 2500 && engineSize <= 2999) {
//     console.log("num4");
//     levelFour = engineSize;
//   } else if (engineSize >= 3000) {
//     console.log("num5");
//     levelFive = engineSize;
//   } else {
//     console.log("none");
//   }
//   console.log(result);
//   return result;
// };

//current year
const date = new Date();
const options = {
  year: "numeric",
};
//calculate vehicle age
let age;
export const vehicleAgeCalc = (selectedYear) => {
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const currentYear = formatter.format(date);
  age = currentYear - selectedYear;
  return age;
};
//calculation of excise
export const exciseCalc = (engineSize, vehiclePrice) => {
  let exciseCalc;
  if (engineSize >= 1000 && engineSize <= 1499) {
    if (age <= 8) {
      exciseCalc = 0;
    } else if (age > 8 && age <= 11) {
      exciseCalc = 0.3 * vehiclePrice;
    } else if (age >= 12) {
      exciseCalc = 0.6 * vehiclePrice;
    }
  } else if (engineSize >= 1500 && engineSize <= 1999) {
    if (age <= 8) {
      exciseCalc = 0.15 * vehiclePrice;
    } else if (age > 8 && age <= 11) {
      exciseCalc = 0.45 * vehiclePrice;
    } else if (age >= 12) {
      exciseCalc = 0.75 * vehiclePrice;
    }
  } else if (engineSize >= 2000 && engineSize <= 2499) {
    if (age <= 8) {
      exciseCalc = 0.35 * vehiclePrice;
    } else if (age > 8 && age <= 11) {
      exciseCalc = 0.6 * vehiclePrice;
    } else if (age >= 12) {
      exciseCalc = 0.9 * vehiclePrice;
    }
  } else if (engineSize >= 2500 && engineSize <= 2999) {
    if (age <= 8) {
      exciseCalc = 0.45 * vehiclePrice;
    } else if (age > 8 && age <= 11) {
      exciseCalc = 0.7 * vehiclePrice;
    } else if (age >= 12) {
      exciseCalc = 1 * vehiclePrice;
    }
  } else if (engineSize >= 3000) {
    if (age <= 8) {
      exciseCalc = 0.55 * vehiclePrice;
    } else if (age > 8 && age <= 11) {
      exciseCalc = 0.8 * vehiclePrice;
    } else if (age >= 12) {
      exciseCalc = 1.1 * vehiclePrice;
    }
  }
  return exciseCalc;
};
//calculation of Duty and Excise
export const calcDutyVat = (vehiclePrice) => {
  const duty = 0.25 * vehiclePrice;
  const vat = 0.16 * vehiclePrice;
  return { duty, vat }; // Return an object with duty and vat properties
};
