var message = document.getElementById("mensagem");
var button = document.getElementById("botao");
message.textContent = "";
button.addEventListener("click", function() {
    timing = setInterval(function(){
    	if(message.textContent != "") {
    		console.log(message.textContent);
    		clearInterval(timing);
    	} 
     }, 1000);
});