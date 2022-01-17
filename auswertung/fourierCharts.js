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

let highestTime = 0.0;
let numData = 0;
function addData(csvData){

  let dataWave3 = [];

  numData = 500
  highestTime = parseFloat(csvData[numData-1]["Time"].replace(",","."))

  let i = 0
  while(i < numData){
      
      dataWave3.push({ x: (highestTime/numData)*i, y: parseFloat(csvData[i]["Recording"].replace(",","."))});

      i += 1;

  }

    myChart4.data.datasets[0].data = dataWave3;
    

    myChart4.config.options.scales.x.min = 0
    myChart4.config.options.scales.x.max = highestTime
    myChart4.update()

}
let data = [];
function updateFourier(k){

  data = [];

  let i = 0

  let xSum = 0;
  let ySum = 0;
  let Max = 0

  while(i < numData){
      
      gy = parseFloat(csvData[i]["Recording"].replace(",","."))

      wt = -2*Math.PI*k*((highestTime/numData)*i);

      fourierX = gy*Math.cos(wt);
      fourierY = gy*Math.sin(wt);
      data.push({ x: fourierX, y: fourierY});

      xSum += fourierX
      ySum += fourierY

      if (Math.abs(fourierX) > Max){
          Max = Math.abs(fourierX)
      }

      if (Math.abs(fourierY) > Max){
        Max = Math.abs(fourierY)
      }

      i += 1;

  }

    myChart.data.datasets[0].data = [{x: (xSum / ((1/(highestTime/numData))*numData)), y: (ySum / ((1/(highestTime/numData))*numData))}]
    myChart.data.datasets[1].data = data;
    myChart.config.options.scales.x.min = -1*Max
    myChart.config.options.scales.x.max = Max
    myChart.config.options.scales.y.max = Max
    myChart.config.options.scales.y.min = -1*Max
    myChart.update()

}


let waveslider3 = document.getElementById("waveslider3")
waveslider3.addEventListener('input', function () {
  updateFourier(waveslider3.value)
  document.getElementById("waveslider3Text").innerHTML = '"Test Frequenz" k ('+ waveslider3.value +")"

  myChart5.data.datasets[0].data = [{x: (parseFloat(waveslider3.value)/1000), y: 0},{x: (parseFloat(waveslider3.value)/1000), y: myChart5.scales.y.max}]
  myChart5.update()

});


play = false
async function playAnim() {
    waveslider3.value = 0
    while(parseFloat(waveslider3.value) < parseFloat(waveslider3.max) && play == true){
        updateValue()
        myChart5.data.datasets[0].data = [{x: (parseFloat(waveslider3.value)/1000), y: 0},{x: (parseFloat(waveslider3.value)/1000), y: myChart5.scales.y.max}]
        myChart5.update()
        waveslider3.value =  parseInt(waveslider3.value) + 1
        console.log(waveslider3.value+" of "+waveslider3.max+" "+(parseInt(waveslider3.value) + 1))
        await sleep(20)
    }
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
    updateFourier(0.0001);
  }
}


