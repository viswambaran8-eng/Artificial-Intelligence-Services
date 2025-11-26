// ======================================================
// SAMPLE AI DATA (Auto-generated)
// ======================================================

// Monthly user count
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const userGrowthData = months.map(() => Math.floor(5000 + Math.random() * 10000));

// Total AI Requests
const totalRequests = userGrowthData.reduce((a, b) => a + b, 0);
document.getElementById("requestsTotal").textContent = totalRequests.toLocaleString();

// Active Users
const activeUsers = Math.floor(5000 + Math.random() * 15000);
document.getElementById("activeUsers").textContent = activeUsers.toLocaleString();

// Accuracy
const accuracy = (92 + Math.random() * 4).toFixed(2);
document.getElementById("accuracy").textContent = accuracy + "%";


// ======================================================
// USER GROWTH CHART
// ======================================================
new Chart(document.getElementById("userGrowth"), {
  type: "line",
  data: {
    labels: months,
    datasets: [{
      label: "Users",
      data: userGrowthData,
      fill: true,
      tension: 0.4
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

// ======================================================
// MODEL PERFORMANCE BAR
// ======================================================
new Chart(document.getElementById("modelPerformance"), {
  type: "bar",
  data: {
    labels: ["Precision", "Recall", "F1 Score"],
    datasets: [{
      data: [
        (85 + Math.random() * 10).toFixed(1),
        (83 + Math.random() * 10).toFixed(1),
        (84 + Math.random() * 10).toFixed(1)
      ]
    }]
  },
  options: {
    scales: { y: { beginAtZero: true, max: 100 } },
    plugins: { legend: { display: false } }
  }
});

// ======================================================
// TASK DISTRIBUTION
// ======================================================
new Chart(document.getElementById("taskDistribution"), {
  type: "doughnut",
  data: {
    labels: ["NLP", "Image AI", "Automation", "Predictive Models", "Chatbots"],
    datasets: [{
      data: [30, 20, 25, 15, 10]
    }]
  },
  options: { plugins: { legend: { position: "bottom" } } }
});

// ======================================================
// RESPONSE TIME LINE
// ======================================================
const processingSpeed = Array.from({ length: 12 }, () =>
  Math.floor(150 + Math.random() * 200)
);

new Chart(document.getElementById("speedLine"), {
  type: "line",
  data: {
    labels: months,
    datasets: [{
      label: "Response Time (ms)",
      data: processingSpeed,
      tension: 0.3
    }]
  },
  options: { plugins: { legend: { display: false } } }
});

// ======================================================
// SENTIMENT RADAR
// ======================================================
new Chart(document.getElementById("sentimentRadar"), {
  type: "radar",
  data: {
    labels: ["Accuracy", "Speed", "Experience", "Trust", "Support"],
    datasets: [{
      label: "Ratings",
      data: [4.6, 4.4, 4.2, 4.7, 4.5]
    }]
  },
  options: {
    scales: { r: { beginAtZero: true, max: 5 } }
  }
});
