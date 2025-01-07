// Enhanced Navigation scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 100; // Adjust this value as needed

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Always show navbar at the top
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'none';
        return;
    }
    
    // Handle scroll direction
    if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        // Scrolling down & past threshold - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - show navbar
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Add this to prevent potential issues with iOS Safari
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});

// Smooth scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that have a hash (#) in their href
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get navbar height for offset
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                
                // Calculate the target position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

const observerOptions = {
    threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Add this to initialize animations
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Show loader for minimum time
    setTimeout(function() {
        const loader = document.querySelector('.loader-wrapper');
        loader.classList.add('fade-out');
        
        // Remove loader from DOM after animation
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 2000); // Adjust this time as needed
});

// Add this after your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('tradingChart').getContext('2d');
    
    // Generate realistic-looking trading data
    const generateData = () => {
        const data = [];
        let price = 100;
        for (let i = 0; i < 100; i++) {
            const open = price;
            const close = price * (1 + (Math.random() - 0.45) * 0.02);
            const high = Math.max(open, close) * (1 + Math.random() * 0.005);
            const low = Math.min(open, close) * (1 - Math.random() * 0.005);
            price = close;
            data.push({ open, high, low, close });
        }
        return data;
    };

    const chartData = generateData();
    
    new Chart(ctx, {
        type: 'candlestick',
        data: {
            datasets: [{
                data: chartData.map((d, i) => ({
                    x: i,
                    o: d.open,
                    h: d.high,
                    l: d.low,
                    c: d.close
                })),
                color: {
                    up: 'rgba(75, 192, 192, 0.5)',
                    down: 'rgba(255, 99, 132, 0.5)',
                },
                borderColor: {
                    up: 'rgb(75, 192, 192)',
                    down: 'rgb(255, 99, 132)',
                }
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
});

// Enhanced Toast Notification System
const messages = [
    "Launch Coming Soon! 🚀",
    "Final Preparations in Progress ⚡",
    "Get Ready for Takeoff! 🌠",
    "Something Big is Coming! 💫",
    "Almost Ready to Launch! 🎯",
    "The Future of AI Trading - Coming Soon! 🔮",
    "Preparing for Liftoff... 🛸",
    "Innovation Loading... ⌛"
];

function showToast() {
    const container = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    
    // Get random message
    const message = messages[Math.floor(Math.random() * messages.length)];
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Add click handlers
document.addEventListener('DOMContentLoaded', function() {
    // For unlock buttons
    document.querySelectorAll('.unlock-button').forEach(button => {
        button.addEventListener('click', showToast);
    });
    
    // For blog link
    const blogLink = document.querySelector('a[href="#blog"]');
    if (blogLink) {
        blogLink.addEventListener('click', (e) => {
            e.preventDefault();
            showToast();
        });
    }
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('trendingChart').getContext('2d');
    
    // Generate upward trending data
    const generateTrendingData = () => {
        const data = [];
        let value = 100;
        for (let i = 0; i < 100; i++) {
            // Create an upward trend with some natural variation
            value = value * (1 + (Math.random() * 0.03));
            data.push(value);
        }
        return data;
    };

    const chartData = generateTrendingData();
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(37, 99, 235, 0.3)');
    gradient.addColorStop(1, 'rgba(37, 99, 235, 0.02)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(100).fill(''),
            datasets: [{
                data: chartData,
                borderColor: '#2563eb',
                borderWidth: 3,
                fill: true,
                backgroundColor: gradient,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
});

// Initialize when document is fully loaded
window.addEventListener('load', initializeLiveTrading); 

// Create particles dynamically
function createParticles() {
    const containers = document.querySelectorAll('.particles-container');
    
    containers.forEach(container => {
        // Create 15 particles per container
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'elevation-particle';
            
            // Random starting position
            particle.style.left = `${Math.random() * 100}%`;
            
            // Random animation delay
            particle.style.animationDelay = `${Math.random() * 10}s`;
            
            // Random opacity
            particle.style.opacity = `${Math.random() * 0.3 + 0.1}`;
            
            container.appendChild(particle);
        }
    });
}

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', createParticles); 