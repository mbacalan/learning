// group of values, type doesn't matter
// max 12 elements

pub fn run() {
    let person: (&str, &str, i8) = ("MB", "M", 27);

    println!("{} is {} and {}", person.0, person.1, person.2)
}
