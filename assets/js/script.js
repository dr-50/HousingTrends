
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

function test(){
    alert("button clicked")
}

// function checkboxHide(){
//     cBox = document.getElementsByClassName('cBox1')
//     box = document.getElementsByClassName('box1')

//     if (cBox.checked == true){
//         box[0].style.display = (box[0].style.display != 'none') ? 'none' : 'block';
//       } else {
//         box[0].style.display = "none";
//       }
// }
