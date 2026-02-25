/**
 * CBRN INTEL HUB - CORE LOGIC
 * Includes: Navigation, Progress Tracking, and Global Intel Decryption
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GLOBAL INTEL MAP SYSTEM ---
    const intelDisplay = document.getElementById('intel-display');
    
    const mapIntel = {
        chernobyl: {
            title: "EUROPE // CHERNOBYL (1986)",
            data: "Massive radiological release due to reactor failure. Resulted in a 30km exclusion zone that remains active. Lesson: Radiation containment protocols."
        },
        tokyo: {
            title: "ASIA // TOKYO (1995)",
            data: "Subway sarin gas incident. A major Chemical (C) event. Taught the world the importance of rapid transit decontamination and air monitoring."
        },
        bhopal: {
            title: "S. ASIA // BHOPAL (1984)",
            data: "Toxic Industrial Chemical (TIC) leak. Over 500,000 people exposed. Highlighted the 'C' in CBRN as a major industrial safety concern."
        },
        fukushima: {
            title: "PACIFIC // FUKUSHIMA (2011)",
            data: "Triple disaster (Earthquake, Tsunami, Nuclear). Proved that natural disasters can trigger 'N' events. Emphasized resilient infrastructure."
        }
    };

    // Global function attached to buttons
    window.showIntel = function(region) {
        if (!intelDisplay) return;

        // Visual feedback for the "decryption" feel
        intelDisplay.style.opacity = "0.5";
        intelDisplay.textContent = "DECRYPTING ENCRYPTED DOSSIER...";

        setTimeout(() => {
            const info = mapIntel[region];
            intelDisplay.style.opacity = "1";
            intelDisplay.innerHTML = `<strong style="color: white;">${info.title}</strong><br><br>${info.data}`;
        }, 600);
    };


    // --- 2. SMOOTH SCROLLING FOR MENU ---
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- 3. SCROLL REVEAL (Optional Gaming Feel) ---
    // Makes cards pop in as the student scrolls down
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.dossier-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

});

// --- 4. MOBILE PROGRESS INDICATOR ---
// Helps students know how much of the hub they've explored
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    
    // If you have a progress bar element
    const progressBar = document.getElementById("progressFill");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
};
