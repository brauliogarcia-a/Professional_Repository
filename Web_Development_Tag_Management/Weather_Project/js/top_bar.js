//Code to display the bar message

function hour(){
var day = new Date().getDay();
    if (day==5) {
      document.getElementById("bar_message").style.display = "block";
  }

  else {
      document.getElementById("bar_message").style.display = "none";
  }

}