$(document).ready(function () {
	var images = document.getElementsByClassName('banner');

    images[0].style.display = 'block';
	images[1].style.display = 'none';
	images[2].style.display = 'none';
	var current = 1;
    var imagesLength = images.length;

	setInterval(function () { 
        console.log(current);
        for (var i = 0; i < imagesLength; i++) {
            images[i].style.display = 'none';
        }

		images[current].style.display = 'block';
        if (current === imagesLength - 1) {
            current = 0;
        } else {
            current++;
        }
	}, 4000);
});
