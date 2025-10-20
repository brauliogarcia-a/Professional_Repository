// Media queries
function checkScreen(){


  const checkMobile = window.matchMedia('screen and (max-width: 600px)');
  const checkTablet = window.matchMedia('screen and (max-width: 1000px)');
  const checkDesktop = window.matchMedia('screen and (min-width: 1001px)');

  checkMobile.addListener(function(e){

    if(e.matches) {

      document.getElementById("displaySize").innerHTML="Small"
      //document.getElementById('banner').src='img/wdd230_image_franklinOriginal_S.jpg'
    }
  });

  checkTablet.addListener(function(e){

    if(e.matches) {

      document.getElementById("displaySize").innerHTML="Medium"
      //document.getElementById('banner').src='img/wdd230_image_franklinOriginal_M.jpg'
    }
  });

  checkDesktop.addListener(function(e){

    if(e.matches) {

      document.getElementById("displaySize").innerHTML="Large"
      //document.getElementById('banner').src='img/wdd230_image_franklinOriginal_R.jpg'
    }
  });

  
  
}
checkScreen()







/*


var medias = window.matchMedia('(max-width: 600px)')

function handleTabletChange(s) {
  if (s.matches) { // If media query matches
        document.getElementById("displaySize").innerHTML="Small"
  }
}
  // Register event listener
medias.addListener(handleTabletChange)

// Initial check
handleTabletChange(medias)


/*
//Large & Medium
var mediaG = window.matchMedia('(max-width: 1000px)')

function handleTabletChange(g) {
  if (g.matches) { // If media query matches
        document.getElementById("displaySize").innerHTML="Medium"
    else{
        document.getElementById("displaySize").innerHTML="Large"
    }
  }
}
  // Register event listener
mediaG.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaG)
*/