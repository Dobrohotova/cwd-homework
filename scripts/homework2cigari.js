var priceCigar = 0.065;
var smokedCigarsPerDay = 19;


var cars = [
	{ price: 11000, name: 'Dacia' },
	{ price: 14000, name: 'Skoda' },
	{ price: 20000, name: 'VolksWagen' },
	{ price: 30000, name: 'Audi' },
	{ price: 50000, name: 'BMW' }
];

cars.forEach(function (car) {

	var years = calculateYears(smokedCigarsPerDay, priceCigar, car.price);

	console.log('Years required to buy ' + car.name+ ': '+years);
	});

	function calculateYears(smokedCigarsPerDay, priceCigar, priceCar) {
		return priceCar / (smokedCigarsPerDay * 365 * priceCigar);
	}


// function calculateYears(smokedCigarsPerDay, priceCigar, priceCar) {
// 	if(smokedCigarsPerDay * priceCigar * 365 == 11000){
// 		console.log('Years required to buy Dacia: ' + years);
// 	} else if(smokedCigarsPerDay * priceCigar * 365 == 14000){
// 	console.log('Years required to buy Skoda: ' + years);
// 	} else if(smokedCigarsPerDay * priceCigar * 365 == 20000){
// 	console.log('Years required to buy VolksWagen: ' + years);
// 	} else if(smokedCigarsPerDay * priceCigar * 365 == 30000){
// 	console.log('Years required to buy Audi: ' + years);
// 	} else if(smokedCigarsPerDay * priceCigar * 365 == 50000){
// 	console.log('Years required to buy BMW: ' + years);
// 	}
// }