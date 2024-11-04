document.getElementById("check-btn").addEventListener("click", function() {
    const inputText = document.getElementById("text-input").value;

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    // Function to clean the input and check for palindrome
    function isPalindrome(text) {
        // Remove non-alphanumeric characters and convert to lowercase
        const cleanedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
        const reversedText = cleanedText.split('').reverse().join('');
        return cleanedText === reversedText;
    }

    const resultDiv = document.getElementById("result");

    if (isPalindrome(inputText)) {
        resultDiv.innerText = `${inputText} is a palindrome.`;
    } else {
        resultDiv.innerText = `${inputText} is not a palindrome.`;
    }
});
