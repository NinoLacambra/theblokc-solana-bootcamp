use std::io;

fn main() {
    let mut input_user = String::new();

    println!("Type any String:");

    match io::stdin().read_line(&mut input_user) {
        Ok(_) => {
            let vowel_count = count_vowels(&input_user);
            println!("Your input is {}. It has {} vowels", input_user.trim(), vowel_count);
        },
        Err(e) => println!("Oops! Something went wrong: {}", e),
    }
}

fn count_vowels(input: &str) -> usize {
    let vowels = ['a', 'A' , 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let mut count = 0;

    for c in input.chars() {
        if vowels.contains(&c) {
            count += 1;
        }
    }
    count
}
