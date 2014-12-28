// 'use strict';

// (function($) {
//   $(document).ready(function() {
//     // Add your jQuery code here
//   });
// })(jQuery);

$(document).ready(function() {
	$(".food-specific").hide();
	$(".food-family").click(function() {
		$(".food-specific").toggle();
	});

	$("input").prop("checked")
});