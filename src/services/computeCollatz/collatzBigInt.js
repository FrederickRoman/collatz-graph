/* global BigInt */
console.log("Inside Collatz BigInt");

const NUM_OF_STEPS_MAX_LIMIT = 10000;
const nextSeqStep = (n) => (n % 2n === 0n ? n / 2n : 3n * n + 1n);

function collaztCompute(start) {
  try {
    const startOrbitStep = BigInt(start);

    if (startOrbitStep < 1n) return [];
    let i = 0;
    let curOrbitStep = startOrbitStep;
    let nextOrbitStep;
    const orbitArray = [startOrbitStep];
    console.log(startOrbitStep);
    while (i < NUM_OF_STEPS_MAX_LIMIT && curOrbitStep !== 1n) {
      nextOrbitStep = nextSeqStep(curOrbitStep);
      console.log(nextOrbitStep);
      orbitArray.push(nextOrbitStep);
      curOrbitStep = nextOrbitStep;
      i++;
    }
    return orbitArray;
  } catch(error) {
    console.log(error)
    return [];
  }
}

export default collaztCompute;
