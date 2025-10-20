function adjustRating(rating) {
    var value = document.getElementById("ratingvalue").innerHTML = rating;
    if (!isNan(value)){
        document.write(value);
    }else{
        document.getElementById("ratingvalue").innerHTML = "Select an Option";
    }
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}