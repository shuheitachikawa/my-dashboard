// 修正後、'wasm-pack build' でビルドして反映。

use wasm_bindgen::prelude::*;
#[wasm_bindgen]
pub fn sums(value: i32) -> i32 {
    let mut a: i32 = 100;
    for i in 1..value+1 {
        a += i;
    }
    a
}
