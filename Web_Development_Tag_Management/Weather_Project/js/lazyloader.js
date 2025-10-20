// get all img tags with data-src attribute
const imageToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the intersectionalObserver API
const imgOptions = {
    threshold: 0,
    rootMargin: "-700px 0px -60px 0px"
};

function loadImages(img){
    let src = img.getAttribute("data-src");
    if (!src){
        return;
    }
    img.src = src;
    img.removeAttribute('data-src')
}


// First check to see if intersection observer is supported 
if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((items, observer) =>{
        items.forEach((item) => { 
           if (item.isIntersecting) {
               return;
            }
            else{
               loadImages(item.target);
               imgObserver.unobserve(item.target);
           }
        });

    }, imgOptions); 

    // Loop through each img an checl status and load if necessary 
    imageToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
}

else{ // just load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}