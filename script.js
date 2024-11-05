document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const keys = document.querySelectorAll(".keyboard button");
  
    keys.forEach(key => {
      key.addEventListener("click", () => {
        const char = key.getAttribute("data-char");
  
        if (char === "←") {
          // Backspace functionality
          textInput.value = textInput.value.slice(0, -1);
        } else {
          // Insert character
          textInput.value += char;
        }
      });
    });
  });
  function toggleKeyboard(keyboardId) {
    // Hide all keyboards
    const keyboards = document.querySelectorAll('.keyboard');
    keyboards.forEach(keyboard => {
        keyboard.style.display = 'none'; // Hide all keyboards
    });

    // Show the selected keyboard
    const selectedKeyboard = document.getElementById(keyboardId);
    if (selectedKeyboard) {
        selectedKeyboard.style.display = 'flex'; // Show the selected keyboard
        selectedKeyboard.style.flexDirection = 'row'; // Ensure it's in row layout
    }
}

document.getElementById("languageButton").onclick = function() {
  // Toggle the keyboard with id "keyboard5"
  toggleKeyboard("keyboard5");
};

// Function to toggle the display of keyboards
function toggleKeyboard(keyboardId) {
  // Hide all keyboards
  const keyboards = document.querySelectorAll('.keyboard');
  keyboards.forEach(keyboard => {
      keyboard.style.display = 'none'; // Hide all keyboards
  });

  // Show the selected keyboard
  const selectedKeyboard = document.getElementById(keyboardId);
  if (selectedKeyboard) {
      selectedKeyboard.style.display = 'flex'; // Show the selected keyboard
      selectedKeyboard.style.flexDirection = 'row'; // Ensure it's in row layout
  }
}

// Function to hide all keyboard elements (if needed in future extensions)
function hideAllKeyboards() {
  const keyboards = document.querySelectorAll(".keyboard");
  keyboards.forEach(keyboard => {
      keyboard.style.display = "none";
  });
}

