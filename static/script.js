let targetDate;

// Fetch target date from API
fetch('/api/target')
    .then(response => response.json())
    .then(data => {
        targetDate = new Date(data.target_date);
        updateCountdown();
        // Update every second
        setInterval(updateCountdown, 1000);
    })
    .catch(error => {
        console.error('Error fetching target date:', error);
        document.getElementById('message').textContent = 'Error loading countdown';
    });

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // If countdown is finished
    if (distance < 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        document.getElementById('message').textContent = "Time's up! 🎉";
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
