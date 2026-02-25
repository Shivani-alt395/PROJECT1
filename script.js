document.addEventListener('DOMContentLoaded', () => {
    const alertBtn = document.getElementById('alertBtn');
    const actionBtn = document.getElementById('actionBtn');
    const banner = document.getElementById('status-banner');

    // Toggle the Emergency Banner
    alertBtn.addEventListener('click', () => {
        if (banner.style.display === 'block') {
            banner.style.display = 'none';
            alertBtn.textContent = 'Test Alert';
            alertBtn.style.background = '#ffcc00';
        } else {
            banner.style.display = 'block';
            alertBtn.textContent = 'Clear Alert';
            alertBtn.style.background = '#ffffff';
            alert("ALERT: Emergency protocols engaged. Review the dashboard for safety measures.");
        }
    });

    // Action Guide Popup
    actionBtn.addEventListener('click', () => {
        const protocol = `
            CBRN IMMEDIATE STEPS:
            1. RECOGNIZE - Unusual smells, sights, or symptoms.
            2. EVACUATE - Move perpendicular to the wind.
            3. SHELTER - Go deep inside or high up depending on agent.
            4. DECONTAMINATE - Strip outer layers and wash.
        `;
        alert(protocol);
    });
});
