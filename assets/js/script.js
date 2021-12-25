
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

var API = key


function eiaApiFetch(){
  fetch(`http://api.eia.gov/series/?series_id=NG.N3010WI2.M&api_key=${API}&category_id=480302`)
  .then(response => response.json())
  .then(data =>{
    var output = data.series[0].data
  
    var prodMonth = []
    var consumption = []

    for (i=0; i <100; i++){
      prodMonth.push(output[i][0]);
    }
    console.log(prodMonth)
    
    for (i=0; i<100; i++){
      consumption.push(output[i][1])
    }
    console.log(consumption)

    });
    
  // console.log(output[0][0])
  //   })
  }
  //push .data to variable 
  //create two array variables
  //push first value from each .data array into array variable 
  //for each i; 1 to 100; i++{
  //data.serise[i].data.length-1 (last value) 
  //push into array 
  //}
