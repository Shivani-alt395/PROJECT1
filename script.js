const intelData = {
    europe: ">> ACCESSING CHERNOBYL LOGS...\n>> STATUS: RESTRICTED ZONE\n>> DATA: RADIATION LEAK SENSORS ACTIVE.",
    asia: ">> ACCESSING FUKUSHIMA DATA...\n>> STATUS: MONITORING\n>> DATA: GROUNDWATER FILTRATION STABLE.",
    americas: ">> ACCESSING THREE MILE ISLAND...\n>> STATUS: DECOMMISSIONED\n>> DATA: NO NEW THREAT DETECTED."
};

function fetchIntel(region) {
    const output = document.getElementById('term-output');
    output.innerHTML = "DECRYPTING...";
    
    // Simulate network delay
    setTimeout(() => {
        output.innerHTML = intelData[region];
    }, 800);
}

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Highlight active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
