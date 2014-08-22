var leapyear = function(year){
	if((year%4 === 0) && (year%100 !==0)){
		return true;
	}else if(year%400 === 0){
		return true;
	}else{
		return false;
	}
};

$(document).ready(function(){
	$('form#leap-year').submit(function(event) {
		var year = parseInt($('input#year').val());
		var result = leapyear(year);

		$('.year').text(year);

		if(!result){
			$('.not').text('not').show();
			$('#result').show();
		}else{
			$('.not').hide();
			$('#result').show();
		}

		event.preventDefault();
	});
})

