function calculate(){

var eden = document.querySelector('.prvbox').value;
var dva = document.querySelector('.vtorbox').value;
var znak = document.querySelector('.operacija');
var fin = document.querySelector('.ednakvo');
var result = document.querySelector('.reshenie');

// na result ili na fin kje treba da se stavi eventListener?! Kako da se 
// kazhe deka sakash koga kje klikne na fin(button) rezultatot da go dava
// vo result

fin.addEventListener('click', function(){

	if(znak == '+'){
			return (eden + dva);
		} else if(znak == '/'){
			return (eden / dva);
		} else if(znak == '-'){
			return (eden - dva);
		} else if(znak == '*'){
			return (eden * dva);
	}
}


// var eden, dva, result;
// function getValues(){
// 	eden = Number(document.getElementById('.eden').value);
// 	dva = Number(document.getElementById('.dva').value);
// }


// // var eden = document.querySelector('.prvbox').value;
// // var dva = document.querySelector('.vtorbox').value;
// var znak = document.getElementById('.operacija');
// var fin = document.getElementById('.ednakvo');
// var result = document.getElementById('.reshenie');

// // na result ili na fin kje treba da se stavi eventListener?! Kako da se 
// // kazhe deka sakash koga kje klikne na fin(button) rezultatot da go dava
// // vo result

// var ednakvo = document.getElementById('ednakvo');

// ednakvo.addEventListener('click', function(){
// 	getValues();
// 	var operacija = document.getElementById('operacija').value;
// 	if(znak == '+'){
// 			result = eden + dva;
// 		} else if(znak == '/'){
// 			result = eden / dva;
// 		} else if(znak == '-'){
// 			result = eden - dva;
// 		} else if(znak == '*'){
// 			result = eden * dva;
// 	}
// }

// 	document.getElementById('result').value = result;

// function answer(){
// 	result.value = eval();
// }

// }


// function plus(){
// 	document.value += '+';
// }

// function minus(){
// 	document.value -= '-';
// }

// function multiply(){
// 	document.value *= '*';
// }

// function divide(){
// 	document.value /= '/';
// }

// function calculate(){
// 	var calculate = eval(document.value);
// 	document.value = calculate
// }


// var a,b, result;
// function getValues(){
// 	a = Number(document.getElementById('a').value);
// 	b = Number(document.getElementById('b').value);
// }

// var sum = document.getElementById('sum');
// var sub = document.getElementById('sub');
// var mult = document.getElementById('mult');
// var div = document.getElementById('div');

// sum.addEventListener('click', function()
// {
// 	getValues();
// 	result = a + b;
// 	alert("The sum is equals to " + result)
// });

// sub.addEventListener('click', function()
// {
// 	getValues();
// 	result = a - b;
// 	alert("The rest is equals to " + result)
// });

// mult.addEventListener('click', function()
// {
// 	getValues();
// 	result = a * b;
// 	alert("The operation is equals to " + result)
// });

// div.addEventListener('click', function()
// {
// 	getValues();
// 	result = a / b;
// 	alert("The operation is equals to " + result)
// });