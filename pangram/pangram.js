//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  let filterString = str.toLowerCase()
    .split('')
    .filter(letter => letter >= 'a' && letter <= 'z')
    .join('')
    
  let mySet = new Set(filterString)
  return mySet.size === 26
};
