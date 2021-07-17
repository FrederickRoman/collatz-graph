/* global BigInt */
console.log("web worker");
var NUM_OF_STEPS_MAX_LIMIT = 100000;
function nextSeqStep(n) {
    if (n % 2n === 0n) {
        return n / 2n;
    } else {
        return 3n * n + 1n;
    }
}
function collaztCompute(start) {
    var startOrbitStep = BigInt(start);
    if (startOrbitStep < 1n) return [];
    var i = 0;
    var curOrbitStep = startOrbitStep;
    var nextOrbitStep;
    var orbitArray = [startOrbitStep];
    while (i < NUM_OF_STEPS_MAX_LIMIT && curOrbitStep !== 1n) {
        nextOrbitStep = nextSeqStep(curOrbitStep);
        orbitArray.push(nextOrbitStep);
        curOrbitStep = nextOrbitStep;
        i++;
    }
    return orbitArray;
}
self.addEventListener("message", function(event){
    var start = event.data;
    var orbit = collaztCompute(start);
    postMessage(orbit);
});
