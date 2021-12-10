
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

myChart.data.datasets[1].label = '"Fourier Graph"'
myChart.data.datasets[0].label = 'Schwerpunkt'

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

const myChart5 = new Chart(
    document.getElementById('finalChart'),
    config2
);

myChart5.data.datasets[0].label = "Finale Transformation"
myChart5.update()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function addData(wave1,wave2,k){


  let dataWave1 = [];
  let dataWave2 = [];
  let dataWave3 = [];

  let t = 0;
  let till = 50;
  let dt = 0.08;
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

renderingStartet = false
waveslider1.addEventListener('input', function () {
    updateValue()
    latest = waveslider1.value
    if(renderingStartet == false){
        renderingStartet = true
        setTimeout(function (){
                createFinalTransformation()
                renderingStartet = false   
        },1000)
    }
});
waveslider2.addEventListener('input', function () {
    updateValue()
    latest = waveslider1.value
    if(renderingStartet == false){
        renderingStartet = true
        setTimeout(function (){
                createFinalTransformation()
                renderingStartet = false   
        },1000)
    }
});
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
createFinalTransformation()


play = false
async function playAnim() {
    waveslider3.value = 0
    while(parseFloat(waveslider3.value) < parseFloat(waveslider3.max) && play == true){
        updateValue()
        waveslider3.value =  parseInt(waveslider3.value) + 1
        console.log(waveslider3.value+" of "+waveslider3.max+" "+(parseInt(waveslider3.value) + 1))
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

function createFinalTransformation(){
    di = 0.01
    i = 0.0

    let t = 0.0;
    let till = 50;
    let dt = 0.1;
    let data = [];
    
    let xSum = 0;
    let ySum = 0;

    data = []
    while(i < 0.5){
        while(t < till){
            let fy = Math.sin(2*Math.PI*(waveslider1.value/1000)*t)
            let hy = Math.sin(2*Math.PI*(waveslider2.value/1000)*t)
            let gy = fy+hy
      
            wt = -2.0*Math.PI*i*t;
            fourierX = gy*Math.cos(wt);
            fourierY = gy*Math.sin(wt);
      
            xSum += fourierX
            ySum += fourierY
      
            t += dt;
      
        }
        t = 0
        data.push({x:i,y: (Math.abs((xSum / ((1/dt)*till)))+Math.abs((ySum / ((1/dt)*till)))) * 1000})
        i = i + di
    }

    myChart5.data.datasets[0].data = data;
    myChart5.update()
}