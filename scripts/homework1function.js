function i2c(inches){
	var output = inches * 2.54;
	console.log(output);
}

function c2i(centimeters){
	var output = centimeters * 0.39;
	console.log(output);
}

i2c();

c2i();





function k2p(kilograms){
	var output = kilograms * 2.2;
	console.log(output);
}

function p2k(pounds){
	var output = pounds / 0.2;
	console.log(output);
}

k2p();

p2k();




function k2m(kilometers){
	var output = kilometers / 1.609344;
	console.log(output);
}

function m2k(miles){
	var output = miles * 1.609344;
	console.log(output);
}

k2m();

m2k();




function l2gus(litters){
	var output = litters / 3.785411784;
	console.log(output);
}

function g2lus(gallons){
	var output = gallons * 3.785411784;
	console.log(output);
}


function l2guk(litters){
	var output = litters / 4.54609;
	console.log(output);
}

function g2luk(gallons){
	var output = gallons * 4.54609;
	console.log(output);
}


g2luk();

l2guk();


g2lus();

l2gus();




function m2b(megabyte){
	var output = megabyte * 1048576;
	console.log(output);
}

function b2m(byte){
	var output = byte / 1024 / 1024;
	console.log(output);
}


m2b();

b2m();

