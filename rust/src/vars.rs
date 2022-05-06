// Holds primitive data or references to them
// Are immutable by default
// Are block scoped

pub fn run() {
    let name = "Giancarlo";
    let mut age = 37;

    println!("My name is {} and I am {}", name, age);

    age = 38;

    println!("A year passed and I'm now {}!", age);

    // Constant
    const ID: u32 = 001;

    println!("ID: {}", ID);

    // Multiple variables
    let (my_name, my_age) = ("Giancarlo", 37);

    println!("{} is {}", my_name, my_age);
}
