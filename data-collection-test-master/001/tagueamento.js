(function(jQuery){
	
	if (!jQuery) return false;

	var elements, name;
	var arr = [];
	
	elements = $('#botoes button');

	elements.each(function(){
		name = $(this).text();
		arr.push(name);
	});

	elements.on('mousedown', function() {
		name = $(this).text();
		console.log(name);
	});

	console.log(arr);

})(window.jQuery);