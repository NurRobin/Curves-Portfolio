const options = {
  responsive: true,
  maintainAspectRatio: false,
  bezierCurve: true,
  animation: {
      duration: 0
  },
  elements: {
  line: {
      borderWidth: 3
  }
  },
  tooltips: {
      enabled: false
  }
}

const config = {
  type: 'scatter',
  data: {
    datasets: [{
      data: [],
      label: "Schwerpunkt",
      pointBackgroundColor: 'orange',
      pointBorderColor: 'darkorange',
      borderColor: "orange",
      pointRadius: 5,
      borderWidth: 1,
      tension: 0,
      showLine: true,
      
  },{
        data: [],
        borderColor: "black",
        borderWidth: 1,
        tension: 0,
        showLine: true,
        pointRadius: 0
    },]
  },
  options: JSON.parse(JSON.stringify(options))
};


const config2 = {
  type: 'scatter',
  data: {
    datasets: [{
        data: [],
        borderColor: "black",
        borderWidth: 1,
        tension: 0,
        showLine: true,
        pointRadius: 0
    }]
  },
  options: options
};



const config3 = {
  type: 'scatter',
  data: {
    datasets: [{
      data: [],
      label: "Schwerpunkt",
      pointBackgroundColor: 'orange',
      pointBorderColor: 'darkorange',
      borderColor: "orange",
      pointRadius: 5,
      borderWidth: 1,
      tension: 0,
      showLine: true,
    },{
      data: [],
      borderColor: "black",
      borderWidth: 1,
      tension: 0,
      showLine: true,
      pointRadius: 0
  }]
  },
  options: options
};


const myChart = new Chart(
  document.getElementById('endChart'),
  config
);
  
myChart.data.datasets[1].label = '"Fourier Graph"'
myChart.data.datasets[0].label = 'Schwerpunkt'
  
myChart.update()


const myChart4 = new Chart(
  document.getElementById('combinedChart'),
  config2
);
  
myChart4.data.datasets[0].label = "Interferrenz"
myChart4.update()
  
const myChart5 = new Chart(
    document.getElementById('finalChart'),
    config3
);
  
myChart5.data.datasets[0].label = 'Current k'
myChart5.data.datasets[1].label = "Finale Transformation"
myChart5.update()


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function addData(csvData){

  let dataWave3 = [];

  let numData = 500
  let highestTime = parseFloat(csvData[numData-1]["Time"])

  let i = 0
  while(i < numData){
      
      dataWave3.push({ x: (highestTime/numData)*i, y: parseFloat(csvData[i]["Recording"])});

  }

    myChart4.data.datasets[0].data = dataWave3;
    myChart4.update()


}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = process;
xhr.open("GET", "Messung.csv", true);
xhr.send();
var csvData = "";
function process()
{
  if (xhr.readyState == 4) {
    csvData = $.csv.toObjects(xhr.responseText);

    console.log(csvData);
    addData(csvData);
  }
}


