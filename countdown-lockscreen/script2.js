// 1. Grab elements from HTML using their unique IDs
const unlockBtn = document.getElementById("unlock-btn");
const headerTitle = document.querySelector(".lock-header h1");
const passcodeInput = document.getElementById("passcode-input");

// 2. Listen for a click event on the unlock button
unlockBtn.addEventListener("click", function() {
    // Read what the user typed in the password box
    const enteredValue = passcodeInput.value;

    // Check if they typed something (for now, let's just make it test functionality)
    if (enteredValue === "1234") {
        headerTitle.textContent = "🔓 Unlocked!";
        alert("Success! Access granted.");
    } else {
        alert("Incorrect passcode! Try '1234'.");
    }
});