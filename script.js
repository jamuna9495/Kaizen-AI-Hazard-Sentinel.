// 1. Setup Camera
const video = document.getElementById('webcam');
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => { video.srcObject = stream; })
    .catch(err => console.error("Camera Error", err));

// 2. Fire Detection Logic
function simulateFireDetection() {
    const strobe = document.getElementById('strobe');
    const alertBox = document.getElementById('fire-alert');
    const riskCard = document.getElementById('risk-card');
    const probVal = document.getElementById('prob-val');
    const heatVal = document.getElementById('heat-val');
    const status = document.getElementById('sys-status');

    // Simulate "Deep Learning" Thinking
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        probVal.innerText = progress.toFixed(2) + "%";
        
        if (progress > 90) {
            clearInterval(interval);
            activateEmergency();
        }
    }, 100);

    function activateEmergency() {
        strobe.style.display = 'block';
        alertBox.style.display = 'block';
        riskCard.style.background = 'rgba(255, 0, 0, 0.3)';
        riskCard.style.borderColor = '#ff0000';
        probVal.innerText = "99.98%";
        heatVal.innerText = "380°C"; // Simulated ignition temp
        status.innerText = "HAZARD_ALERT_SENT";
        status.style.color = "#ff0000";
        
        // Logical depth: Mentioning the action taken
        console.log("KAIZEN-AI Action: Fire Suppressant System Triggered. Emergency Services Notified.");
    }
}

setInterval(() => {
    document.querySelector('#clock').innerText = new Date().toLocaleTimeString('en-GB');
}, 1000);
