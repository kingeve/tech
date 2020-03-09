var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

function onClick() {
    if (inputsAreEmpty()) {
      label.textContent = 'Error: one or both inputs are empty.';
      return;
    }
    volume_sphere();
  }
  function inputsAreEmpty() {
    if (getRadius() == '' ) {
      return true;
    } else {
      return false;
    }
  }
function volume_sphere()
 {
  var volume;
  var radius = getRadius();
  var sum;
  volume = Math.pow(radius,3) * (4/3) * Math.PI;
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  sum = volume + radius;
  label.textContent = volume + ' + ' + radius + ' = ' + sum;
 } 
 function getRadius() {
    return inputs[0].value;
  }