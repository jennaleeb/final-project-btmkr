// 'use strict';

// for typeahead plugin
function  matcher (item, query) {
        if (item.toLowerCase().indexOf(query.trim().toLowerCase()) != -1) {
            return true;
        }
    }


$(document).ready(function() {
    console.log("Ready!"); 


// Typeahead plugin function on searchbar for adding food preferences
    $('#typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'foods',
        displayKey: 'value',
        source: function (query, process) {
        foods = [];
        map = {};

        var data = [
            {"foodName": "Apple"},
            {"foodName": "Peache"},
            {"foodName": "Plum"},
            {"foodName": "Nectarine"},
            {"foodName": "Banana"},

            {"foodName": "Tomato"},
            {"foodName": "Eggplant"},
            {"foodName": "Cucumber"},
            {"foodName": "Carrot"},
            {"foodName": "Cauliflour"},

            {"foodName": "Chicken"},
            {"foodName": "Beef"},
            {"foodName": "Pork"},
            {"foodName": "Quail"},
            {"foodName": "Turkey"},

            {"foodName": "Salmon"},
            {"foodName": "Haddock"},
            {"foodName": "Sea Bass"},
            {"foodName": "Lobster"},
            {"foodName": "Clams"}
        ];

        $.each(data, function (i, food) {
            map[food.foodName] = food;
    if(matcher(food.foodName, query)) {
        foods.push({value: food.foodName});
    }
        });

        process(foods);
    },



    });


    var containerheight = 40;
    // Add text in textbox as list of food item
	$('input[type=button]').on('click', function() {
	var item = $('.tt-input').val();
	var waveMark = '<div class="pref-button dont-like">~</div>';
	var exclaimMark = '<div class="pref-button cant-eat">!</div>';
	var xMark = '<div class="pref-button remove-item">X</div>';
	if (item.length !== 0) {
		$( ".cant-eat-container" ).append( '<li class="list-of-items">'+item+xMark+waveMark+exclaimMark+'</li>');
        $(".cant-eat-container li:last-child")
            .css('opacity','0')
            .animate(
                {opacity: '1'}, 
                {queue: true, duration: 'slow'}
            );
		$('.tt-input').val('');
		$('.cant-eat-container').height(containerheight);
		containerheight += 40;
		}

	
	});

	// Use enter key as button click
	$('.tt-input').keypress(function (e) {
 		var key = e.which;
 		if(key == 13)  // the enter key code
  			{
			    $('#add-list').click();
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
        containerheight -= 40;
        $('.cant-eat-container').height(containerheight);
        
	});

	

    // Save your preferences

	$("#save-pref").on('click', function() {
    	swal({
    		title: "Thanks",   
    		text: "Your Preferences Have Been Saved!",   
    		type: "success",   
    		confirmButtonText: "Okay", 
    		allowOutsideClick: "true"
    	});
    });



    
	// Toggle show/hide friend's food preferences

        $('.include-friend').on('click', function() {
            $(this).closest(".friend").toggleClass("friend-active");
            $(this).siblings('.friend-food-pref').fadeToggle(200);
        });
    
});