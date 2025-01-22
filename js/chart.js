

window.onload = function () {
  // First Chart
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    exportEnabled: true,
    animationEnabled: true,
    
    axisX: {
      title: "Time Range",
      titleFontColor: "#0275d8",
      interval: 1, //
    },
    axisY: {
      title: "No. Of Requests",
      titleFontColor: "#0275d8",
      lineColor: "#000",
      labelFontColor: "#000",
      tickColor: "#000",
      includeZero: true,
      gridThickness: 1, // Set the thickness of the grid lines
      gridColor: "#f2f2f2", // Light gray color for grid lines
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: "column",
        name: "Successful",
        showInLegend: true,
        color: "rgba(0, 200, 0, 0.8)", // Set bar color to green for Successful
        dataPoints: [
          { label: "1", y: 80 },
          { label: "2", y: 34 },
          { label: "3", y: 19 },
          { label: "4", y: 10 },
          { label: "5", y: 20 },
          { label: "6", y: 15 },
          { label: "7", y: 42 },
          { label: "8", y: 88 },
          { label: "9", y: 34 },
          { label: "10", y: 80 },
          { label: "11", y: 80 },
          { label: "12", y: 80 },
          { label: "1", y: 80 },
          { label: "2", y: 34 },
          { label: "3", y: 19 },
          { label: "4", y: 10 },
          { label: "5", y: 20 },
          { label: "6", y: 15 },
          { label: "7", y: 42 },
          { label: "8", y: 88 },
          { label: "9", y: 34 },
          { label: "10", y: 80 },
          { label: "11", y: 80 },
          { label: "12", y: 80 },
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
        ],
      },
      {
        type: "column",
        name: "Failed",
        showInLegend: true,
        color: "rgba(200, 0, 0, 0.8)", // Set bar color to green for Successful
        dataPoints: [
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
        ],
      },
    ],
  });
  chart1.render();


  // Second Chart
  var chart2 = new CanvasJS.Chart("chartContainer2", {
    exportEnabled: true,
    animationEnabled: true,
    
    axisX: {
      title: "Time Range",
      titleFontColor: "#0275d8",
      interval: 1, //
    },
    axisY: {
      title: "No. Of Requests",
      titleFontColor: "#0275d8",
      lineColor: "#000",
      labelFontColor: "#000",
      tickColor: "#000",
      includeZero: true,
      gridThickness: 1, // Set the thickness of the grid lines
      gridColor: "#f2f2f2", // Light gray color for grid lines
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data: [
      {
        type: "column",
        name: "Total Request",
        showInLegend: true,
        color: "#0275d880",
        dataPoints: [
          { label: "1", y: 80 },
          { label: "2", y: 34 },
          { label: "3", y: 19 },
          { label: "4", y: 10 },
          { label: "5", y: 20 },
          { label: "6", y: 15 },
          { label: "7", y: 42 },
          { label: "8", y: 88 },
          { label: "9", y: 34 },
          { label: "10", y: 80 },
          { label: "11", y: 80 },
          { label: "12", y: 80 },
          { label: "1", y: 80 },
          { label: "2", y: 34 },
          { label: "3", y: 19 },
          { label: "4", y: 10 },
          { label: "5", y: 20 },
          { label: "6", y: 15 },
          { label: "7", y: 42 },
          { label: "8", y: 88 },
          { label: "9", y: 34 },
          { label: "10", y: 80 },
          { label: "11", y: 80 },
          { label: "12", y: 80 },
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
          { label: "1", y: 50 },
          { label: "2", y: 14 },
          { label: "3", y: 19 },
          { label: "4", y: 5 },
          { label: "5", y: 10 },
          { label: "6", y: 1 },
          { label: "7", y: 22 },
          { label: "8", y: 48 },
          { label: "9", y: 34 },
          { label: "10", y: 50 },
          { label: "11", y: 50 },
          { label: "12", y: 34 },
        ],
      },
      
    ],
  });
  chart2.render();

  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    e.chart.render();
  }
};
