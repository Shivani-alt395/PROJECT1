const intelDatabase = {
    chemical: ">> CHEMICAL THREAT DETECTED: Indian Army Standard Operating Procedure (SOP) 04.\n>> Use AP2C or GID-3 for detection.\n>> Antidote: Atropine/PAM autoinjectors.",
    biological: ">> BIOLOGICAL HAZARD ANALYSED.\n>> Key agents: Anthrax, Plague, Viral Hemorrhagic Fevers.\n>> Protocol: Seal respiratory tract, activate sampling unit (MBU).",
    radiological: ">> RADIATION MONITORING ACTIVE.\n>> Safety: Time, Distance, Shielding.\n>> Use Teletector 6112 or similar Indian Army issued Dosimeters.",
    nuclear: ">> NUCLEAR EVENT SURVIVAL.\n>> Thermal Flash Warning: 0-10 Sec. Blast Wave: 10-60 Sec.\n>> Protocol: Drop and Cover. Head away from flash. Shield eyes."
};

function openModule(type) {
    const terminal = document.getElementById('term-content');
    terminal.innerHTML = "DECRYPTING INTEL...";
    
    // Simulate tactical delay
    setTimeout(() => {
        terminal.innerHTML = `> ACCESS GRANTED<br>> ${intelDatabase[type]}`;
        // Scroll to terminal for mobile users
        document.getElementById('terminal').scrollIntoView({behavior: 'smooth'});
    }, 600);
}

// Add a pulse effect to the header status
setInterval(() => {
    const status = document.querySelector('.status');
    status.style.opacity = status.style.opacity == '0.2' ? '1' : '0.2';
}, 1000);
