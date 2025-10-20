function getYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("yearC").innerHTML = n;

    var x = document.lastModified;
    document.getElementById("currentHour").innerHTML = x;
}

function toggleMenu () {
  document.getElementById('display').classList.toggle('hide');
}