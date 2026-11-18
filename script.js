// ==========================================
// DAY 3: Live Clock & Date Functionality
// ==========================================

function updateClockAndDate() {
    const now = new Date();

    // 1. Handle Live Time (Hours and Minutes)
    let hours = now.getHours();
    let minutes = now.getMinutes();

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const timeString = `${formattedHours}:${formattedMinutes}`;

    document.getElementById('current-time').textContent = timeString;

    // 2. Handle Live Date
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = dateString;
}

// Run clock immediately and every second
updateClockAndDate();
setInterval(updateClockAndDate, 1000);


// ==========================================
// DAY 4: Countdown Timer Functionality
// ==========================================

// Set your target goal date: November 23, 2026 at midnight
const targetDate = new Date('November 23, 2026 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Check if the countdown has reached or passed zero
    if (timeLeft <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('quote').textContent = '🎉 Goal Reached! Congratulations on your launch!';
        return;
    }

    // Mathematical breakdown of milliseconds into time units
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(timeLeft / day);
    const hours = Math.floor((timeLeft % day) / hour);
    const minutes = Math.floor((timeLeft % hour) / minute);
    const seconds = Math.floor((timeLeft % minute) / second);

    // Update HTML elements with leading zeros (e.g., '05' instead of '5')
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Run countdown immediately and every second
updateCountdown();
setInterval(updateCountdown, 1000);

// ==========================================
// DAY 5: Unlock & Lock Interaction Logic
// ==========================================

const unlockBtn = document.getElementById('unlock-btn');
const lockBtn = document.getElementById('lock-btn');
const containerElements = document.querySelectorAll('.time-date-section, .countdown-section, .quote-section, .unlock-section');
const homeScreen = document.getElementById('home-screen');

// When user clicks "Click to Unlock Screen"
unlockBtn.addEventListener('click', () => {
    // Hide lock screen sections
    containerElements.forEach(el => el.classList.add('hidden'));
    // Show home screen view
    homeScreen.classList.remove('hidden');
});

// When user clicks "Lock Screen Again"
lockBtn.addEventListener('click', () => {
    // Show lock screen sections again
    containerElements.forEach(el => el.classList.remove('hidden'));
    // Hide home screen view
    homeScreen.classList.add('hidden');
});
