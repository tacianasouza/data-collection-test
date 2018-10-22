(function(hasAddEventListener){
	if (!hasAddEventListener) return false;

	var element, elements;
	var arr = [];
	elements = document.querySelectorAll('#botoes button');
	
	for(var i = 0, end = elements.length; i < end; i++) {
		element = elements[i];
		var name = (this.innerText);
		
		element.addEventListener('mousedown',function() {
			var name = (this.innerText);
			console.log(name);
		});
		
		arr[i] = element.innerText
		
	}
	console.log(arr);
})(window.addEventListener);