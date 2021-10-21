/*CONTENEDOR 1*/
var contador1=0;
var contador2=0;
var contador3=0;
var suma=0;

const contenedor1 = document.querySelector("#contenedor1");

contenedor1.addEventListener('dragenter', e => {
	console.log('Drag Enter');
});

contenedor1.addEventListener('dragleave', e => {
	console.log('Drag Leave');
});

contenedor1.addEventListener('dragover', e => {
	e.preventDefault();
	console.log('Drag Over');
});

contenedor1.addEventListener('drop', e => {
	console.log('Drop');
	contenedor1.appendChild(wordexample);
	if (wordexampleid+2 == 5) {
		/*alert("Primera correcta");*/
		contador1=1;
		console.log(contador1);
		suma=contador1+contador2+contador3;
		console.log(suma);
		word9set.setAttribute("draggable", "false");
	}
	if (suma==3) {
	gifcorrecto.style.display="block";
	setTimeout(function(){
    	alert("¡Felicidades! Has respondido correctamente. Ahora puedes seguir al siguiente nivel.");
    	btn.style.display="block";
		letrero.style.display="block";
		gifcorrecto.style.display="none";
		letreromascota.style.display="none";
		letreromascota2.style.display="block";
	},1000);
	}

});

/*CONTENEDOR 2*/
const contenedor2 = document.querySelector("#contenedor2");

contenedor2.addEventListener('dragenter', e => {
	console.log('Drag Enter');
});

contenedor2.addEventListener('dragleave', e => {
	console.log('Drag Leave');
});

contenedor2.addEventListener('dragover', e => {
	e.preventDefault();
	console.log('Drag Over');
});

contenedor2.addEventListener('drop', e => {
	console.log('Drop');
	contenedor2.appendChild(wordexample);
	if (wordexampleid+2 == 3) {
		/*alert("Segunda correcta");*/
		contador2=1;
		console.log(contador2);
		suma=contador1+contador2+contador3;
		console.log(suma);
		word2set.setAttribute("draggable", "false");
	}
	if (suma==3) {
	gifcorrecto.style.display="block";
	setTimeout(function(){
    	alert("¡Felicidades! Has respondido correctamente. Ahora puedes seguir al siguiente nivel.");
    	btn.style.display="block";
		letrero.style.display="block";
		gifcorrecto.style.display="none";
		letreromascota.style.display="none";
		letreromascota2.style.display="block";
	},1000);
	}
});


/*CONTENEDOR 3*/
const contenedor3 = document.querySelector("#contenedor3");

contenedor3.addEventListener('dragenter', e => {
	console.log('Drag Enter');
});

contenedor3.addEventListener('dragleave', e => {
	console.log('Drag Leave');
});

contenedor3.addEventListener('dragover', e => {
	e.preventDefault();
	console.log('Drag Over');
});

contenedor3.addEventListener('drop', e => {
	console.log('Drop');
	contenedor3.appendChild(wordexample);
	if (wordexampleid+2 == 4) {
		/*alert("Tercera correcta");*/
		contador3=1;
		console.log(contador3);
		suma=contador1+contador2+contador3;
		console.log(suma);
		word4set.setAttribute("draggable", "false");
	}
	if (suma==3) {
	gifcorrecto.style.display="block";
	setTimeout(function(){
    	alert("¡Felicidades! Has respondido correctamente. Ahora puedes seguir al siguiente nivel.");
    	btn.style.display="block";
		letrero.style.display="block";
		gifcorrecto.style.display="none";
		letreromascota.style.display="none";
		letreromascota2.style.display="block";
	},1000);
	}
});




