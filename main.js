// Konami Code Demo

// Global Variables
let keys = [];

// Add Keydown Event Listener to document
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  // Add key to keys array
  keys.push(e.key);

  // Cap length of keys at 4
  if (keys.length > 4) {
    keys.splice(0, 1);
  }

  console.log(keys);

  // Check for code
  if (JSON.stringify(keys) === JSON.stringify(["c", "o", "d", "e"])) {
    alert("You entered the special code");
  }
}
