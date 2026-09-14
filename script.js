// ============================================
// Cloud Monitoring Dashboard
// Project 4 of 4
// ============================================


// Get elements
const cpuValue =
    document.getElementById("cpuValue");

const memoryValue =
    document.getElementById("memoryValue");

const networkValue =
    document.getElementById("networkValue");

const requestValue =
    document.getElementById("requestValue");

const cpuBar =
    document.getElementById("cpuBar");

const memoryBar =
    document.getElementById("memoryBar");

const refreshBtn =
    document.getElementById("refreshBtn");

const lastUpdated =
    document.getElementById("lastUpdated");

const healthScore =
    document.getElementById("healthScore");

const cpuLine =
    document.getElementById("cpuLine");

const networkLine =
    document.getElementById("networkLine");


// ============================================
// Generate Random Monitoring Values
// ============================================

function generateMonitoringData() {

    const cpu =
        Math.floor(Math.random() * 35) + 30;

    const memory =
        Math.floor(Math.random() * 25) + 50;

    const network =
        (Math.random() * 2 + 1.5).toFixed(1);

    const requests =
        (Math.random() * 8 + 15).toFixed(1);

    const health =
        Math.floor(Math.random() * 5) + 95;


    return {
        cpu,
        memory,
        network,
        requests,
        health
    };
}


// ============================================
// Generate Chart Points
// ============================================

function generateChartPoints() {

    let points = [];

    for (let i = 0; i <= 10; i++) {

        const x = i * 60;

        const y =
            Math.floor(Math.random() * 100) + 60;

        points.push(`${x},${y}`);
    }

    return points.join(" ");
}


// ============================================
// Update Dashboard
// ============================================

function updateDashboard() {

    const data =
        generateMonitoringData();


    // CPU
    cpuValue.textContent =
        data.cpu + "%";

    cpuBar.style.width =
        data.cpu + "%";


    // Memory
    memoryValue.textContent =
        data.memory + "%";

    memoryBar.style.width =
        data.memory + "%";


    // Network
    networkValue.textContent =
        data.network + " GB";


    // Requests
    requestValue.textContent =
        data.requests + "K";


    // Health
    healthScore.textContent =
        data.health + "%";


    // Charts
    cpuLine.setAttribute(
        "points",
        generateChartPoints()
    );

    networkLine.setAttribute(
        "points",
        generateChartPoints()
    );


    // Time
    const now =
        new Date();

    const time =
        now.toLocaleTimeString();

    lastUpdated.textContent =
        "Last updated: " + time;
}


// ============================================
// Refresh Button
// ============================================

refreshBtn.addEventListener(
    "click",
    function () {

        refreshBtn.textContent =
            "↻ Updating...";

        setTimeout(function () {

            updateDashboard();

            refreshBtn.textContent =
                "↻ Refresh";

        }, 500);

    }
);


// ============================================
// Automatic Monitoring Updates
// ============================================

setInterval(function () {

    updateDashboard();

}, 10000);


// ============================================
// Initial Dashboard Load
// ============================================

updateDashboard();