pub fn run() {
  // Print to console
  println!("Hello from print.rs file");

  // Basic formatting
  println!("{} is {}", "foo", "bar");

  // Positional args
  println!("{0} is {1} and {2}", "foo", "bar", "foo");

  // Named args
  println!("{name} is {age}", name="Guitar", age="33");

  // Placeholder traits
  println!("Binary {:b}, Hex {:x}, Octal: {:o}", 10, 10, 10);

  // Placeholder debug traits
  println!("{:?}", (12, true, "hello"));

  // Placeholder debug traits
  println!("10 + 10 = {}", 10 + 10);
}
