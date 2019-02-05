
function calculateTip(){
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;

  //quick validation
  if(billAmount === "" || serviceQuality === 0){
    return document.getElementById('validateBill').innerHTML = "Enter a value";
  } else {
    document.getElementById('validateBill').style.display = "none";
  }

  //do some math

  var total = (billAmount * serviceQuality);
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);

  document.getElementById('totalTip').style.display = "block";
  document.getElementById('tip').innerHTML = total
}




//hide tip on load
document.getElementById('totalTip').style.display = "none";


document.getElementById('calculate').onclick = function() {
  calculateTip();
};
