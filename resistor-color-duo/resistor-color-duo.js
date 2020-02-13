//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export const decodedValue = (arr) => {
  arr.length = 2
  let resistorValue = ""
  for (let i = 0; i < arr.length; i++) {
    resistorValue += COLORS.indexOf((arr[i]));
  }
  return Number(resistorValue)
};


