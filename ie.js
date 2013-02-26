$(document).ready(function(){
	var currentPosition = 0;
	var slideWidth = 670;
	var slides = $('.slide');
	var numberOfSlides = slides.length;
	var background = [ 	
					"#fc460d",
					"#fcb61a",
					"#61bda4",
					"#20c5ff",
					"#b897c4"
				];
	var text = [ 	
					"fce935",
					"00e31a",
					"4775ff",
					"d561ff",
					"ff2e5f"
				];
	  
  // Remove scrollbar in JS
  $('#slidesContainer').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
	.css({
      'float' : 'left',
      'width' : slideWidth
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner').css('width', slideWidth * numberOfSlides);

  // Insert controls in the DOM
  $('#slideshow')
    .prepend('<div class="control" id="leftControl">Clicking moves left</div>')
    .append('<div class="control" id="rightControl">Clicking moves right</div>');

  isRepeat(currentPosition);

  // Create event listeners for .controls clicks
  $('.control')
    .bind('click', function(){
    // Determine new position
	currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
	$("body").css("background-color", background[currentPosition]);
	$("html").css("background-color", background[currentPosition]);
	$(".mind").css("filter", 
	"progid:DXImageTransform.Microsoft.gradient(startColorstr=#C8" + text[currentPosition] +
	",endColorstr=#C8" + text[currentPosition]);
	
    isRepeat(currentPosition);
    // Move slideInner using margin-left
    $('#slideInner').css({
      'marginLeft' : slideWidth*(-currentPosition)
    });
  });


  function isRepeat(position){
    // Hide left arrow if position is first slide
	if(position==-1){ 
		currentPosition=numberOfSlides-1;
		$("body").css("background-color", background[currentPosition]);
		$("html").css("background-color", background[currentPosition]);
		$(".mind").css("filter", 
		"progid:DXImageTransform.Microsoft.gradient(startColorstr=#C8" + text[currentPosition] +
		",endColorstr=#C8" + text[currentPosition])
	}
	else if(position==numberOfSlides){
			currentPosition=0;
			$("body").css("background-color", background[currentPosition]);
			$("html").css("background-color", background[currentPosition]);
			$(".mind").css("filter", 
			"progid:DXImageTransform.Microsoft.gradient(startColorstr=#C8" + text[currentPosition] +
			",endColorstr=#C8" + text[currentPosition])
			}
  }	
});