tns({
	container: '.testimonial-slider',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	mouseDrag: true,
	gutter: 0,
	nav: true,
	controls: false,
	controlsText: [
		'<i class="lni lni-chevron-left"></i>',
		'<i class="lni lni-chevron-right"></i>',
	],
	responsive: {
		0: { items: 1 },
		540: { items: 1 },
		768: { items: 1 },
		992: { items: 2 },
		1170: { items: 2 },
	},
});
tns({
	container: '.screenshort-slider',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	mouseDrag: true,
	gutter: 0,
	nav: true,
	controls: false,
	controlsText: [
		'<i class="lni lni-chevron-left"></i>',
		'<i class="lni lni-chevron-right"></i>',
	],
	responsive: {
		0: { items: 1 },
		540: { items: 1 },
		768: { items: 3 },
		992: { items: 3 },
		1170: { items: 4 },
	},
});
GLightbox({
	href: 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
	type: 'video',
	source: 'youtube',
	width: 900,
	autoplayVideos: true,
});
