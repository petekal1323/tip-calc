function calculateTip(){
  var billAmount = document.getElementById('billAmount').value;
  var serviceQuality = document.getElementById('serviceQuality').value;

  //quick validation
  if(billAmount === ""){
    alert("Enter Your Bill");
  }

  if (serviceQuality === 0 || serviceQuality === "0") {
    alert("Choose a Service Option");
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
