var imee = document.createElement('input');
var prezimee = document.createElement('input');
var prosekk = document.createElement('input');
var indekss = document.createElement('input');
var body = document.querySelector('body');
var kopche = document.createElement('button');
kopche.style.width = '20px';
kopche.style.height = '20px';
body.appendChild(imee);
body.appendChild(prezimee);
body.appendChild(prosekk);
body.appendChild(indekss);
body.appendChild(kopche);


var studenti = [
	{ime: 'Irina', prezime: 'Dobrohotova', prosek: 9, indeks: 54489, brishi: ''},
	{ime: 'Marko', prezime: 'Markovski', prosek: 7, indeks: 54490, brishi: ''},
	{ime: 'Darko', prezime: 'Markovski', prosek: 6.5, indeks: 54491, brishi: ''},
	{ime: 'Trajko', prezime: 'Markovski', prosek: 7.5, indeks: 54492, brishi: ''},
	{ime: 'Petko', prezime: 'Markovski', prosek: 6, indeks: 54493, brishi: ''},
];

var table = document.createElement('table');
table.border = 1;


var columns = [];
var trh = document.createElement('tr');

for(let i in studenti[0]){
	columns.push(i);
	var th = document.createElement('th');
	th.innerText = i;
	trh.appendChild(th);
}

table.appendChild(trh);

// for(let i = 0; i < studenti.length; i++){
// 	var tr = document.createElement('tr');

// 	for(let j in columns){
// 		var td = document.createElement('td');
// 		td.innerText = studenti[i][columns[j]];
// 		tr.appendChild(td);
// 	}


for(let i = 0; i < studenti.length; i++){
	var tr = document.createElement('tr');

	var td1 = document.createElement('td');
	td1.innerText = studenti[i].ime;
	tr.appendChild(td1);

	var td2 = document.createElement('td');
	td2.innerText = studenti[i].prezime;
	tr.appendChild(td2);

	var td3 = document.createElement('td');
	td3.innerText = studenti[i].prosek;	
	tr.appendChild(td3);

	var td4 = document.createElement('td');
	td4.innerText = studenti[i].indeks;	
	tr.appendChild(td4);

	var td5 = document.createElement('button');
	td5.style.width = '44px';
	td5.style.height = '20px';
	tr.appendChild(td5);

	table.appendChild(tr);
}

body.appendChild(table);

// function klik(){
// 		var tr2 = document.createElement('tr');

// 		var td11 = document.createElement('td');
// 		td1.innerText = imee.value;
// 		tr2.appendChild(td11);

// 		var td22 = document.createElement('td');
// 		td2.innerText = prezimee.value;
// 		tr2.appendChild(td22);

// 		var td33 = document.createElement('td');
// 		td3.innerText = prosekk.value;	
// 		tr2.appendChild(td33);

// 		var td44 = document.createElement('td');
// 		td4.innerText = indekss.value;
// 		tr2.appendChild(td44);

// 		var td55 = document.createElement('button');
// 		td55.style.width = '44px';
// 		td55.style.height = '20px';
// 		tr2.appendChild(td55);
		
// 		table.appendChild(tr2);
// };


function klik(){
    var row = table.insertRow(1);
    var td11 = row.insertCell(0);
    var td22 = row.insertCell(1);
    var td33 = row.insertCell(2);
    var td44 = row.insertCell(3);
    var td55 = row.insertCell(4);
    td55 = document.createElement('button');
    td11.innerText = imee.value;
    td22.innerText = prezimee.value;
    td33.innerText = prosekk.value;
    td44.innerText = indekss.value;
    // KAKO DA STAVAM KOPCHE?!?!?!?!?!?!?!?!?!?!?!?
}

function brishi(){
	table.deleteRow(1);
	// SE BRISHE PRVIOT RED, NE SELEKTIRANIOT I SAMO NA
	// KLIK NA POSLEDNIOT!!!!

	// for(let i in studenti){
	// 	var brish = table.deleteRow(this);
	// }
}


kopche.addEventListener('click', klik);
td5.addEventListener('click', brishi);


// td5.addEventListener('click', brishi);

	// var tr2 = document.createElement('tr');
	// td1.innerText = imee.value;
	// td2.innerText = prezimee.value;
	// td3.innerText = prosekk.value;
	// td4.innerText = indekss.value;
	// table.appendChild(tr2);


