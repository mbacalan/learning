use ferris_says::say;
use std::io::{stdout, stdin, BufWriter};

pub fn run() {
    let stdout = stdout();

    println!("Hello! Input some message so I can show it!");

    let mut message = String::new();

    stdin().read_line(&mut message).expect("Error!");

    let width = message.chars().count();
    let mut writer = BufWriter::new(stdout.lock());

    say(message.as_bytes(), width, &mut writer).unwrap();
}
