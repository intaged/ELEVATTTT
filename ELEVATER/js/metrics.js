// Function to animate counting up
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Update metrics when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Simulate real-time metrics with crypto-relevant values
            animateValue(document.getElementById('activeGPUs'), 0, 25000, 2000); // Active traders
            animateValue(document.getElementById('totalCompute'), 0, 1000000, 2000); // Successful trades
            animateValue(document.getElementById('activeModels'), 0, 500, 2000); // Daily trading signals
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe the metrics section
const metricsSection = document.querySelector('.metrics-section');
if (metricsSection) {
    observer.observe(metricsSection);
} 