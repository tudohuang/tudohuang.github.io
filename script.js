var word = "'m Tudo Huang!";
var typingWord = document.getElementById("typing-word");
var index = 0;
var reverse = false;
function typeWord() {
    if (index < word.length && !reverse) {
        typingWord.innerHTML += word.charAt(index);
        index++;
        setTimeout(typeWord, 90); // Decreased the timeout for smoother typing
    } else if (index > 0 && reverse) {
        typingWord.innerHTML = typingWord.innerHTML.slice(0, -1);
        index--;
        setTimeout(typeWord, 90); // Decreased the timeout for smoother backspacing
    } else {
        reverse = !reverse;
        setTimeout(typeWord, 1000);
    }
}


window.addEventListener("DOMContentLoaded", function() {
    typingWord.innerHTML = "I";
    typeWord();
});


