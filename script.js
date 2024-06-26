document.addEventListener('DOMContentLoaded', function() {
    const typingWord = document.getElementById("typing-word");
    typingWord.innerHTML = "I"; 
    const typingText = "'m Tudo Huang!";
    let i = 0;
    let isDeleting = false;
    const typingSpeed = 100; 
    const deleteSpeed = 100; 
    const delay = 10000; 

    function typeWriter() {
        if (!isDeleting) {
            if (i < typingText.length) {
                typingWord.innerHTML += typingText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(typeWriter, delay); 
            }
        } else {
            if (i > 0) {
                typingWord.innerHTML = "I" + typingText.substring(0, i - 1);
                i--;
                setTimeout(typeWriter, deleteSpeed);
            } else {
                isDeleting = false;
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }

    typeWriter();
});
