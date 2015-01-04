'use strict';

(function($) {
  
// Add text in textbox as list of food item
	$('input[type=button]').on('click', function() {
		var item = $('input[type=text]').val();
		if (item.length !== 0) {
			$( ".cant-eat-container" ).append( '<h3 class="list-of-items">'+item+'</h3>' );
			$('input[type=text]').val('');
		}
    	
	});

// Use enter key as button click
	$('#food_adder').keypress(function (e) {
 		var key = e.which;
 		if(key == 13)  // the enter key code
  			{
			    $('input[type=button]').click();
			    return false;  
  			}
	});  

	

 //  	$(".food-specific").hide();
	// $(".food-family").click(function() {
	// 	$(".food-specific").toggle();
	// });

	// $("input").prop("checked")

})(jQuery);