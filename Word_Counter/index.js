import PromptSync from "prompt-sync";
const prompt = PromptSync();
let user_input = prompt("Please enter your desired sentence: ");
function count_words(str) {
    let words = str.split(/\s+/).filter(word => word != " ");
    return words.length;
}
function count_character(str) {
    let character = str.replace(/\s+/g, "");
    return character.length;
}
console.log(`number of words in ${user_input} are : ${count_words(user_input)} and number of characters are: ${count_character(user_input)}\n`);
