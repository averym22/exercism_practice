//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  let rna = ''
  for (let letter of dna) {
    if (letter === 'A') {
      rna += 'U'
    }
    else if (letter === 'T') {
      rna += 'A'
    }
    else if (letter === 'G') {
      rna += 'C'
    }
    else if (letter === 'C') {
      rna += 'G'
    } else {
      rna += ''
    }
  }
 return rna
};