document.body.innerHTML = "<h2>Hello from JavaScript<h2>";
console.log("Test 2");

function ceateElement(text) {
  const element = document.createElement("h2");
  element.textContent = text;
  return element;
}
