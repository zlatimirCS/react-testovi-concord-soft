const handleResize = () => {
	let windowWidth = window.innerWidth;

	if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
		const header = document.querySelector('header');
		const stickyQuiz = document.querySelector('.stickyQuiz');
		const closeStickyFooter = document.querySelector('.close');
		closeStickyFooter.addEventListener('click', () => {
			stickyQuiz.classList.remove('active');
		});

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
};
// Get the initial width
handleResize();

// Add the event listener for window resize
window.addEventListener('resize', handleResize);

const mySwiper = new Swiper('.mySwiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	centeredSlides: true,
	spaceBetween: 30,

	// If you need pagination
	pagination: {
		el: '.swiper-pagination'
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	// And if you need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar'
	},

	breakpoints: {
		// when window width is >= 1024px
		1024: {
			slidesPerView: 2, // Set to show 2 slides per view on larger screens
			spaceBetween: 50,
			centeredSlides: false
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 40,
			centeredSlides: false
		}
	}
});

const player = videojs('video-player', {
	fluid: true // Ensures video aspect ratio is maintained
});

const playButtons = document.querySelectorAll('.playButton');

playButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		console.log(button);
		let video = document.querySelector('#video-player');
		const videoOverlay = document.querySelector('#video-overlay');
		const closeButton = document.querySelector('#close-button');
		const videoContainer = button.closest('.videoContent');

		closeButton.addEventListener('click', () => {
			video.style.display = 'none';
			videoOverlay.style.display = 'none';
			player.pause();
		});
		video.style.display = 'block';
		videoOverlay.style.display = 'flex';
		let videoUrl = videoContainer.getAttribute('data-video-url');
		player.src({ type: 'video/mp4', src: videoUrl });
		player.ready(function () {
			player.play();
			// player.requestFullscreen();
		});
	});
});
