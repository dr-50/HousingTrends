
function myFunction1(){
  // Get the checkbox
  var checkBox = document.getElementById("myCheck1");
  // Get the output text
  var text = document.getElementById("box1")
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    } 

var API = ''
var prodMonth = []
var consumption = []

async function latest5YearsUsage(){
  fetch(`http://api.eia.gov/series/?series_id=NG.N3010WI2.M&api_key=${API}&category_id=480302`)
  .then(response => response.json())
  .then(data =>{
    var output = data.series[0].data


    for (i=0; i <60; i++){
      prodMonth.push(output[i][0]);
    }
    console.log('built prodMonth')
    console.log(prodMonth)
    
    for (i=0; i<60; i++){
      consumption.push(output[i][1])
    }
    console.log('built consumption')
    console.log(consumption)
    })
  
   .then(fiveYearsChart());
   console.log('built chart')
  }

  function fiveYearsChart(){
    const ctx = document.getElementById('chart1');
    new Chart(ctx, {
      type: "line",
      data: {
        labels: prodMonth,
        datasets: [{
          fill: false,
          pointRadius:0,
          lineTension: 1,
          backgroundColor: "rgb(0, 0, 0)",
          borderColor: "rgb(0, 0, 0)",
          data: consumption,
          normalized:true,
          parsing:false
        }]
      },
      options: {
        legend: {display: false},
        animation: false
      }
    });
  }

