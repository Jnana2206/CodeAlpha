const display = document.getElementById("display");

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
  try {
    display.value = eval(display.value); // ⚠️ eval is fine for simple demo
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
