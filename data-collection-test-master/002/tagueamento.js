(function(jQuery){
	var arr = [];
	var value, values;
	values = $('#valores span'); 

	for (var i = 0, end = values.length; i < end; i++) {
		value = values[i];
		arr[i] = value.innerText;
	}
	console.log(arr);
 	
 	$('#botoes a').on('mousedown', function(){
		console.log(arr[parseInt($(this).text()) - 1]);
	});
	
})(window.jQuery);