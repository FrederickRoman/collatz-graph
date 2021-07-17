function collaztCompute(startOrbitStep: number): number[] {
  let step = 0;
  const NUM_OF_STEPS_MAX_LIMIT = 1000;
  const nextSeqStep = (n: number): number => (n % 2 === 0 ? n / 2 : 3 * n + 1);

  let curOrbitStep: number = startOrbitStep;
  let nextOrbitStep: number | null = null;
  const orbitArray: number[] = [startOrbitStep];
  while (step < NUM_OF_STEPS_MAX_LIMIT && curOrbitStep !== 1) {
    nextOrbitStep = nextSeqStep(curOrbitStep);
    orbitArray.push(nextOrbitStep);
    curOrbitStep = nextOrbitStep;
    step++;
  }

  return orbitArray;
}

export default collaztCompute;
