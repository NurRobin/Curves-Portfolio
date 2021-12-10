
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
    pointRadius: 10,
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

const config1 = {
    type: 'scatter',
    data: {
      datasets: [{
        data: [],
        label: "Welle 1",
        borderColor: "red",
        borderWidth: 1,
        tension: 2,
        showLine: true,
        pointRadius: 0
      },{
        data: [],
        label: "Welle 2",
        borderColor: "blue",
        borderWidth: 1,
        tension: 0,
        showLine: true,
        pointRadius: 0
      }]
    },
    options: options 
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





const myChart = new Chart(
document.getElementById('endChart'),
config
);

myChart.data.datasets[0].label = '"Fourier Graph"'
myChart.update()

const myChart3 = new Chart(
document.getElementById('sinChart'),
config1
);
const myChart4 = new Chart(
document.getElementById('combinedChart'),
config2
);

myChart4.data.datasets[0].label = "Interferrenz"
myChart4.update()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function addData(wave1,wave2,k){


  let dataWave1 = [];
  let dataWave2 = [];
  let dataWave3 = [];

  let t = 0;
  let till = 50;
  let dt = 0.1;
  let data = [];
  
  let xSum = 0;
  let ySum = 0;

  let Max = 0
  while(t < till){
      let fy = Math.sin(2*Math.PI*wave1*t)
      let hy = Math.sin(2*Math.PI*wave2*t)
      let gy = fy+hy

      dataWave1.push({ x: t, y: fy});
      dataWave2.push({ x: t, y: hy});
      dataWave3.push({ x: t, y: gy});

      wt = -2*Math.PI*k*t;

      fourierX = gy*Math.cos(wt);
      fourierY = gy*Math.sin(wt);
      data.push({ x: fourierX, y: fourierY});

      xSum += fourierX
      ySum += fourierY

      t += dt;

      if (Math.abs(fourierX) > Max){
          Max = Math.abs(fourierX)
      }

      if (Math.abs(fourierY) > Max){
        Max = Math.abs(fourierY)
      }

  }

  console.log("Off from center:"+ Math.round((Math.abs((xSum / ((1/dt)*till)))+Math.abs((ySum / ((1/dt)*till)))) * 1000))
  
  myChart3.data.datasets[0].data = dataWave1;
  myChart3.data.datasets[1].data = dataWave2;
  myChart4.data.datasets[0].data = dataWave3;
  myChart3.update()
  myChart4.update()
  
  myChart.data.datasets[0].data = [{x: (xSum / ((1/dt)*till)), y: (ySum / ((1/dt)*till))}]
  myChart.data.datasets[1].data = data;
  myChart.config.options.scales.x.min = -1*Max
  myChart.config.options.scales.x.max = Max
  myChart.config.options.scales.y.max = Max
  myChart.config.options.scales.y.min = -1*Max
  myChart.update()


}

let waveslider1 = document.getElementById("waveslider1")
let waveslider2 = document.getElementById("waveslider2")
let waveslider3 = document.getElementById("waveslider3")

waveslider1.addEventListener('input', updateValue);
waveslider2.addEventListener('input', updateValue);
waveslider3.addEventListener('input', updateValue);

function updateValue() {
    // if (waveslider1.value > waveslider2.value) {
    //     waveslider3.max = waveslider1.value
    // } else {
    //     waveslider3.max = waveslider2.value
    // }

    document.getElementById("waveslider1Text").innerHTML = "Welle 1 ("+ waveslider1.value / 1000 +")"
    document.getElementById("waveslider2Text").innerHTML = "Welle 2 ("+ waveslider2.value / 1000 +")"
    document.getElementById("waveslider3Text").innerHTML = '"Test Frequenz" k ('+ waveslider3.value / 1000 +")"

  addData(waveslider1.value / 1000,waveslider2.value/ 1000,waveslider3.value/ 1000)
}

updateValue()
play = false
async function playAnim() {
    waveslider3.value = 0
    while(parseFloat(waveslider3.value) < parseFloat(waveslider3.max) && play == true){
        updateValue()
        waveslider3.value =  parseFloat(waveslider3.value) + 1
        console.log(waveslider3.value+" of "+waveslider3.max)
        await sleep(20)
    }
}



document.getElementById("fourier-button").addEventListener("click",function () {
    if(play == true){
        play = false
        return
    }
    play = true
    playAnim()
});