//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export const decodedValue = ([color1, color2]) => {

  return COLORS.indexOf(color1)*10 + COLORS.indexOf(color2);
};


