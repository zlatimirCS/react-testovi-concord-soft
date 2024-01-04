if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	const header = document.querySelector('header');
	const stickyQuiz = document.querySelector('.stickyQuiz');

	let observer = new IntersectionObserver((entries) => {
		if (entries[0].boundingClientRect.y < 0) {
			header.classList.add('headerScroll');
			stickyQuiz.classList.add('active');
		} else {
			header.classList.remove('headerScroll');
			stickyQuiz.classList.remove('active');
		}
	});
	observer.observe(document.querySelector('#top-of-site-pixel-anchor'));
}
