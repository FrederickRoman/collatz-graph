// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/wasm_collatz.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const collatz = await init("./pkg/wasm_collatz_bg.wasm");

  // Call the Add function export from wasm, save the result
  const result = collatz.collatz_compute(3);

  // Set the result onto the body
  console.log(`Collatz result from 3: ${result}`);
  document.body.textContent = `Collatz result from 3: ${result}`;
};
runWasm();