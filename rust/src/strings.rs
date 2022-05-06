// Primitive str = immutable string in memory
// String = growable/changable string data

pub fn run() {
    // let hello = "Hello";
    let mut hello_str = String::from("Hello ");

    // get length
    println!("{}, Length: {}", hello_str, hello_str.len());

    // push - char type
    hello_str.push('W');
    // push - str type
    hello_str.push_str("orld");
    println!("{}, Length: {}", hello_str, hello_str.len());
    // check if empty
    println!("{}, Empty?: {}", hello_str, hello_str.is_empty());
    // check if contains
    println!("{}, Contains World?: {}", hello_str, hello_str.contains("World"));
    // replace
    println!("{}, Replace: {}", hello_str, hello_str.replace("World", "There!"));
    // loop string by whitespace
    for word in hello_str.split_whitespace() {
        println!("{}", word)
    }
}
