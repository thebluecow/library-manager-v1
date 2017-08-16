let getDate = function(date = new Date()) {
	return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

Date.prototype.addDays = function(days) {
		var dat = new Date(this.valueOf());
		dat.setDate(dat.getDate() + days);
		return dat;
}
	
// for Return Book page. If returned_on is null, set to current day for submit
// otherwise sets date field as Invalid Date
(function(){
	
	// http://www.jquerybyexample.net/2011/10/validate-date-format-using-jquery.html

	function validateDate(dtValue) {
		var dtRegex = new RegExp(/\b\d{4}[\/-]\d{1,2}[\/-]\d{1,2}\b/);
		return dtRegex.test(dtValue);
	};
	
	$('#return_book').click(function() {
		if ($('#returned_on').val() === '' || !(validateDate($('#returned_on').val()))) {
			$('#returned_on').val(getDate());
		}
	});
}());

// Book Search button (/book view)
(function() {
	$('#search_button').click(function() {
		$('form').submit();
	});
}());
