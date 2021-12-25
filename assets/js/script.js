
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



function eiaApiFetch(){
  fetch('http://api.eia.gov/series/?series_id=NG.N3010WI2.M&api_key='&API&'&category_id=480302')
  .then(response => response.json())
  .then(data => data.series[0].data.forEach(element=>console.log(element)));

  //push .data to variable 
  //create two array variables
  //push first value from each .data array into array variable 
  //for each i; 1 to 100; i++{
  //data.serise[i].data.length-1 (last value) 
  //push into array 
  //}
}
