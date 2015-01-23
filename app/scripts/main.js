// 'use strict';

// Using typeahead plugin
function  matcher (item, query) {
        if (item.toLowerCase().indexOf(query.trim().toLowerCase()) != -1) {
            return true;
        }
    }

$(document).ready(function() {
    console.log("Ready!"); 



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
            {"foodName": "Apples"},
            {"foodName": "Peaches"},
            {"foodName": "Plums"},
            {"foodName": "Nectarines"},
            {"foodName": "Bananas"}
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


    var containerheight = 100;
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
	});

	


	$("#save-pref").on('click', function() {
    	swal({
    		title: "Thanks",   
    		text: "Your Preferences Have Been Saved!",   
    		type: "success",   
    		confirmButtonText: "Okay", 
    		allowOutsideClick: "true"
    	});
    });



	

    
});