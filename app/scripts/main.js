'use strict';


(function($) {
  
// Add text in textbox as list of food item
	var containerheight = 100;
	$('.list-of-items').fadeIn(1000);

	$('input[type=button]').on('click', function() {
		var item = $('.food_adder').val();
		var waveMark = '<div class="delete dont-like">~</div>';
		var exclaimMark = '<div class="delete cant-eat">!</div>';
		var xMark = '<div class="delete remove-item">x</div>';
		if (item.length !== 0) {
			$( ".cant-eat-container" ).append( '<li class="list-of-items">'+item+xMark+waveMark+exclaimMark+'</li>');
			$('.food_adder').val('');
			$('.cant-eat-container').height(containerheight);
			containerheight += 40;
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
	
	
	$('.cant-eat-container').on('click', '.dont-like', function() {
		$(this).closest('.list-of-items').toggleClass('dont-like-background');
	});

	$('.cant-eat-container').on('click', '.cant-eat', function() {
		$(this).closest('.list-of-items').toggleClass('cant-eat-background');
	});

	$('.cant-eat-container').on('click', '.remove-item', function() {
		$(this).closest('.list-of-items').remove();
	});

	

  	$(".food-specific").hide();
	$(".food-family").click(function() {
		$(".food-specific").toggle();
	});

	

	$(".cant-eat-container").on('click', '#save-pref', function() {
		alert("Your preferences has been saved!");
	});

		var substringMatcher = function(strs) {
	  return function findMatches(q, cb) {
	    var matches, substrRegex;
	 
	    // an array that will be populated with substring matches
	    matches = [];
	 
	    // regex used to determine if a string contains the substring `q`
	    substrRegex = new RegExp(q, 'i');
	 
	    // iterate through the pool of strings and for any string that
	    // contains the substring `q`, add it to the `matches` array
	    $.each(strs, function(i, str) {
	      if (substrRegex.test(str)) {
	        // the typeahead jQuery plugin expects suggestions to a
	        // JavaScript object, refer to typeahead docs for more info
	        matches.push({ value: str });
	      }
	    });
	 
	    cb(matches);
	  };
	};
	 
	var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
	  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
	  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
	  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
	  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
	  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
	  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
	  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
	  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
	];
	 
	$('#the-basics .typeahead').typeahead({
	  hint: true,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'states',
	  displayKey: 'value',
	  source: substringMatcher(states)
	});

})(jQuery);