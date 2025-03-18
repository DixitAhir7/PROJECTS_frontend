// Set the maximum tracking time (4 hours in milliseconds)
const MAX_TRACK_TIME = 4 * 60 * 60 * 1000;

// Load previously stored time from localStorage
let totalTimeSpent = parseInt(localStorage.getItem("totalTimeSpent")) || 0;
let sessionStartTime = Date.now();

function updateTimeSpent() {
    let currentTime = Date.now();
    let timeSpentInSession = currentTime - sessionStartTime;

    totalTimeSpent += timeSpentInSession;

    if (totalTimeSpent > MAX_TRACK_TIME) {
        totalTimeSpent = MAX_TRACK_TIME;
    }

    localStorage.setItem("totalTimeSpent", totalTimeSpent.toString());
}

// Track time when the page is unloaded or visibility changes
window.addEventListener("beforeunload", updateTimeSpent);
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        updateTimeSpent();
    } else {
        sessionStartTime = Date.now(); // Reset session start time when user returns
    }
});

// Periodically log time spent (for debugging)
setInterval(() => {
    console.log(`Time spent: ${Math.floor(totalTimeSpent / 1000)} seconds`);
}, 5000);
