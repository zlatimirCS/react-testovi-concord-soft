// Get the button
const mybutton = document.getElementById('scrollToTop');

// When the user scrolls down 20px from the top of the document, show the button
const scrollFunction = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
};

const topFunction = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

window.onscroll = function () {
	scrollFunction();
};
