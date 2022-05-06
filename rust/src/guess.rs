use std::io;
use std::cmp::Ordering;
use rand::Rng;

pub fn run() {
    println!("Welcome to Guess the Number!");

    let secret_number = rand::thread_rng().gen_range(1, 101);

    loop {
        println!("Please input your guess and press Enter");

        let mut guess = String::new();

        io::stdin().read_line(&mut guess).expect("Failed to read the input!");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("Your guess must be a valid number (1-100)!");
                continue;
            },
        };

        println!("Your guess is: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Equal => {
                println!("Correct, you win!");
                break;
            },
            Ordering::Greater => println!("Too big!")
        }
    }
}
