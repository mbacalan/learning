// fixed length, same data types
pub fn run() {
    let mut numbers: [i32; 5] = [1, 2, 3, 4, 5];
    // re-assign value
    numbers[2] = 20;
    // get all
    println!("{:?}", numbers);
    // get single
    println!("Single Value: {}", numbers[0])
}
