// The wasm-pack uses wasm-bindgen to build and generate JavaScript binding file.
// Import the wasm-bindgen crate.
use wasm_bindgen::prelude::*;
use js_sys::Int32Array;

static NUM_OF_STEPS_MAX_LIMIT: i32 = 100000;

// Our Add function
// wasm-pack requires "exported" functions
// to include #[wasm_bindgen]
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}

// lifted from the `console_log` example
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}


#[wasm_bindgen]
pub fn collatz_compute(start: i32) -> Int32Array {
  let start_orbit_step = start;
  if start_orbit_step < 1 {
    return Int32Array::new_with_length(0);
  }
  let mut i = 0;
  let mut cur_orbit_step = start_orbit_step;
  let mut next_orbit_step;
  let mut orbit_array = vec![start_orbit_step];
  while i < NUM_OF_STEPS_MAX_LIMIT && cur_orbit_step != 1 {
    if cur_orbit_step % 2 == 0 {
      next_orbit_step = cur_orbit_step / 2;
    } else {
      next_orbit_step = 3 * cur_orbit_step + 1;
    }
    orbit_array.push(next_orbit_step);
    cur_orbit_step = next_orbit_step;
    i += 1;
  }
  log(&format!("collatz_compute({}, {:?})", start, orbit_array));
  return Int32Array::from(&orbit_array[..]);
}