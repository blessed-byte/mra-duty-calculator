export const yearOptions = Array.from({ length: 124 }, (_, index) =>
  (2023 - index).toString()
);

export const number = (num1) => {
  let result;
  if (num1 >= 1000 && num1 <= 1499) {
    console.log("num1");
    result = num1;
  } else if (num1 >= 1500 && num1 <= 1999) {
    console.log("num2");
    result = num1;
  } else if (num1 >= 2000 && num1 <= 2499) {
    console.log("num3");
    result = num1;
  } else if (num1 >= 2500 && num1 <= 2999) {
    console.log("num4");
    result = num1;
  } else if (num1 >= 3000) {
    console.log("num5");
    result = num1;
  } else {
    console.log("none");
  }
  console.log(result);
  return result;
};

// if
// const calcDutyRates = (duty, excise, vat)=>{

// }
