'use strict';


(function($) {
  
// Add text in textbox as list of food item
	$('.food_adder').fadeIn(1000);
	$('input[type=button]').on('click', function() {
		var item = $('.food_adder').val();
		var xMark = '<div class="delete dont-like">~</div>';
		var exclaimMark = '<div class="delete cant-eat">!</div>';
		var heightAdd = 250;
		if (item.length !== 0) {
			$( ".cant-eat-container" ).append( '<li class="list-of-items">'+item+xMark+exclaimMark+'</li>');
			$('.food_adder').val('');
			$('.cant-eat-section').css('height',heightAdd);
			
		}

    	
	});

// Use enter key as button click
	$('.food_adder').keypress(function (e) {
 		var key = e.which;
 		if(key == 13)  // the enter key code
  			{
			    $('input[type=button]').click();
			    return false;  
  			}
	});  

// Change colour of food item when click ~ or !
	$('.dont-like').on('click', function() {
		$(this).closest('.list-of-items').toggleClass('dont-like-background');
	});

	$('.cant-eat').on('click', function() {
		$(this).closest('.list-of-items').toggleClass('cant-eat-background');
	


	});
	

 //  	$(".food-specific").hide();
	// $(".food-family").click(function() {
	// 	$(".food-specific").toggle();
	// });

	// $("input").prop("checked")

})(jQuery);