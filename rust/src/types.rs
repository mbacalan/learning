/*
Primitive Types:

Integers: u8, i8, u16, i16, u32, i32, u64, i64, u128, i128
Floats: f32, f64
Boolean (bool)
Characters (char),
Tuples ()
Arrays []
*/

use std::{i32, i64};

pub fn run() {
    // Rust is statically typed but it can also infer/inherit types
    let _x = 1; // will default to i32
    let _y = 1.5; // will default to f64

    // Explicit type
    let _z: i64 = 123456;

    println!("Max i32 is {}", i32::MAX);
    println!("Max i64 is {}", i64::MAX);

    // Boolean
    let _is_active: bool = true;

    // Get boolean from expression
    let _is_greater: bool = 10 > 5;

    // Character
    let _a = 'a';
}
