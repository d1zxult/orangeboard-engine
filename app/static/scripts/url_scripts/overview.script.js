const socket = io();

const createDoughnutChart = (ctx, label, borderColor) => {
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Used', 'Free'],
      datasets: [{
        label: label,
        data: [0, 100],
        backgroundColor: [borderColor, 'rgba(200, 200, 200, 0.5)'],
        borderColor: borderColor,
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      cutout: '70%',
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#f8f9fa'
          }
        },
        tooltip: {
          enabled: false
        },
        centerText: {
          display: true,
        }
      }
    },
    plugins: [{
      id: 'centerText',
      beforeDraw: function (chart) {
        const ctx = chart.ctx;
        const width = chart.width;
        const height = chart.height;
        const fontSize = Math.min(width, height) / 12;
        const text = chart.data.datasets[0].data[0] + '%';
        ctx.restore();
        ctx.font = fontSize + "px sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#f8f9fa";
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 1.8;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }]
  });
};

const cpuLoadCtx = document.getElementById('cpuLoadChart').getContext('2d');
const gpuLoadCtx = document.getElementById('gpuLoadChart').getContext('2d');
const memoryCtx = document.getElementById('memoryChart').getContext('2d');
const swapCtx = document.getElementById('swapChart').getContext('2d');

const cpuLoadChart = createDoughnutChart(cpuLoadCtx, 'CPU Load (%)', 'rgba(218, 152, 30, 1)');
const gpuLoadChart = createDoughnutChart(gpuLoadCtx, 'GPU Load (%)', 'rgba(218, 152, 30, 1)');
const memoryChart = createDoughnutChart(memoryCtx, 'Memory Usage (%)', 'rgba(218, 152, 30, 1)');
const swapChart = createDoughnutChart(swapCtx, 'Swap Usage (%)', 'rgba(218, 152, 30, 1)');

socket.on('system_data', (data) => {
  cpuLoadChart.data.datasets[0].data = [data.cpu_used, 100 - data.cpu_used];
  gpuLoadChart.data.datasets[0].data = [data.gpu_used, 100 - data.gpu_used];
  memoryChart.data.datasets[0].data = [data.memory_used, 100 - data.memory_used];
  swapChart.data.datasets[0].data = [data.swap_used, 100 - data.swap_used];

  cpuLoadChart.update();
  gpuLoadChart.update();
  memoryChart.update();
  swapChart.update();
});

socket.on('connect', () => {
  socket.emit('request_system_data');
});
