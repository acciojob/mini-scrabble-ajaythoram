//your code here
const evaluatedText = document.getElementById("evaluatedText");
const letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input", function() {
  const inputText = this.value;
  const count = inputText.length;
  letterCount.textContent = count;
});

