if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	const header = document.querySelector('header');
	let observer = new IntersectionObserver((entries) => {
		if (entries[0].boundingClientRect.y < 0) {
			header.classList.add('headerScroll');
		} else {
			header.classList.remove('headerScroll');
		}
	});
	observer.observe(document.querySelector('#top-of-site-pixel-anchor'));
}
