	var arr = [];
	var value, values, buttons;
	
	values = document.querySelectorAll('#valores span');
	buttons = document.querySelectorAll('#botoes a');

	for(var i = 0, end = values.length; i < end; i ++) {
		value = values[i];
		arr[i] = value.innerText;

	buttons[i].addEventListener('mousedown', function() {
		console.log(arr[parseInt((this).innerText) - 1]);
	});
}
console.log(arr);