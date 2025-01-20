const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 50 };

const labels = [
  "8.0",
  "9.0",
  "10.0",
  "11.0",
  "8.0",
  "9.0",
  "10.0",
  "11.0",
  "11.0",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Success",
      data: [65, 59, 80, 81, 56, 55, 40, 40, 50], // Example values
      borderColor: "rgba(0, 200, 0, 1)",
      backgroundColor: "rgba(0, 200, 0, 0.5)",
    },
    {
      label: "Failure",
      data: [28, 48, 40, 19, 86, 27, 90, 40, 50], // Example values
      borderColor: "rgba(200, 0, 0, 1)",
      backgroundColor: "rgba(200, 0, 0, 0.5)",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vertical Bar Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  },
};

new Chart(document.getElementById("myChart1"), config);



const DATA_COUNT2 = 7;
const NUMBER_CFG2 = { count: DATA_COUNT2, min: 0, max: 100 };

const labels2 = [
  "8.0",
  "9.0",
  "10.0",
  "11.0",
  "8.0",
  "9.0",
  "10.0",
  "11.0",
  "11.0",
  "8.0",
  "9.0",
  "10.0",
  "11.0",
  "11.0",
];
const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Success",
      data: [65, 59, 80, 81, 56, 55, 40, 30, 50,55, 40, 70, 50, 40], // Example values
      borderColor: "#0275d8",
      backgroundColor: "#0275d890",
    },
  ],
};

const config2 = {
  type: "bar",
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vertical Bar Chart",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  },
};

new Chart(document.getElementById("myChart2"), config2);
