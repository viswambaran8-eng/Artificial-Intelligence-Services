/* ------------------------- */
/* COUNTER ANIMATION         */
/* ------------------------- */
function animateCounter(id, endValue, duration = 2000) {
  const element = document.getElementById(id);
  let start = 0;
  const increment = endValue / (duration / 20);

  const counter = setInterval(() => {
    start += increment;
    if (start >= endValue) {
      start = endValue;
      clearInterval(counter);
    }
    element.textContent = Math.floor(start);
  }, 20);
}

// Dashboard values
animateCounter("requestsTotal", 2500);
animateCounter("activeUsers", 350);
animateCounter("accuracy", 99);

/* ------------------------- */
/* COLOR PALETTE             */
/* ------------------------- */
const autoColors = ["#6C63FF", "#00C9A7", "#FF7B7B", "#FFA726", "#29B6F6"];

/* ------------------------- */
/* 1. USER ACTIVITY CHART    */
/* ------------------------- */
new Chart(document.getElementById("userGrowth"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Users",
      data: [120, 190, 260, 310, 420, 530],
      borderColor: autoColors[0],
      borderWidth: 3,
      tension: 0.4
    }]
  },
  options: { responsive: true }
});

/* ------------------------- */
/* 2. MODEL PERFORMANCE      */
/* ------------------------- */
new Chart(document.getElementById("modelPerformance"), {
  type: "bar",
  data: {
    labels: ["Text", "Vision", "Voice", "Automation", "Prediction"],
    datasets: [{
      label: "Quality (%)",
      data: [92, 87, 90, 95, 93],
      backgroundColor: autoColors
    }]
  },
  options: { responsive: true }
});

/* ------------------------- */
/* 3. TASK DISTRIBUTION      */
/* ------------------------- */
new Chart(document.getElementById("taskDistribution"), {
  type: "pie",
  data: {
    labels: ["NLP", "Vision", "Robotics", "Automation", "Analytics"],
    datasets: [{
      data: [28, 22, 18, 20, 12],
      backgroundColor: autoColors
    }]
  },
  options: { responsive: true }
});

/* ------------------------- */
/* 4. SPEED CHART            */
/* ------------------------- */
new Chart(document.getElementById("speedLine"), {
  type: "line",
  data: {
    labels: ["1s", "2s", "3s", "4s", "5s", "6s"],
    datasets: [{
      label: "Speed (ms)",
      data: [180, 170, 165, 150, 155, 140],
      borderColor: autoColors[3],
      borderWidth: 3,
      tension: 0.3
    }]
  },
  options: { responsive: true }
});
