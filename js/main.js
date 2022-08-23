$(document).ready(function() {
	$('main').pagepiling();

	const bcolor = ['#e44d26','#29a7de','#f89b28','#0169ae','#111b73','#e5910e'];
	//#e44d26, #29a7de, #63a614, #f89b28, #feca41, 
	// #0169ae,#111b73, #e5910e

	$('.main_skill li').each(function(i) {
		$(this).easyPieChart({
			trackColor : '#dedede', barColor : bcolor[i],
			size : 250, lineWidth : 30, lineCap : 'butt',
			animate : 1000
		});
	})

	$('#graphic2 ul').masonry({
		//columnWidth: 200,
		fitWidth : true,
		itemSelector: '#graphic2 li'
	});
	
	$('#coding ul').slick({
		slidesToShow : 3,
		slidesToScroll : 3,
		autoplay : true,
		autoplaySpeed : 1000,
		dots : true,
	})
	lightbox.option({
		fitImagesInViewport : false,
		disableScrolling : true,
		wrapAround : true,
	})
});//ready()

//lightbox 옵션 수정