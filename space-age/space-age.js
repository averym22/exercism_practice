//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

let obritalPeriods = 
    
{
  earth : 1,
  mercury : 0.2408467,
  venus : 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}




 
export const age = (planet, seconds) => {

  const orbitSeconds = 86400
  const days = 365.250
  let conversion = ((seconds/orbitSeconds)/(days*obritalPeriods[planet])).toFixed(2)
  
  return Number(conversion)
  
};

