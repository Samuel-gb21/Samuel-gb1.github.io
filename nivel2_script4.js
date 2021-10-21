/*CONTENEDOR RESPUESTAS 1*/
const respuestas1 = document.querySelector("#respuestas1");

respuestas1.addEventListener('dragenter', e => {
	console.log('Drag Enter');
});

respuestas1.addEventListener('dragleave', e => {
	console.log('Drag Leave');
});

respuestas1.addEventListener('dragover', e => {
	e.preventDefault();
	console.log('Drag Over');
});

respuestas1.addEventListener('drop', e => {
	console.log('Drop');
	respuestas1.appendChild(wordexample)
});

/*CONTENEDOR RESPUESTAS 2*/
const respuestas2 = document.querySelector("#respuestas2");

respuestas2.addEventListener('dragenter', e => {
	console.log('Drag Enter');
});

respuestas2.addEventListener('dragleave', e => {
	console.log('Drag Leave');
});

respuestas2.addEventListener('dragover', e => {
	e.preventDefault();
	console.log('Drag Over');
});

respuestas2.addEventListener('drop', e => {
	console.log('Drop');
	respuestas2.appendChild(wordexample)
});

/*CONTENEDOR RESPUESTAS 3*/
const respuestas3 = document.querySelector("#respuestas3");

respuestas3.addEventListener('dragenter', e => {
	console.log('Drag Enter');
});

respuestas3.addEventListener('dragleave', e => {
	console.log('Drag Leave');
});

respuestas3.addEventListener('dragover', e => {
	e.preventDefault();
	console.log('Drag Over');
});

respuestas3.addEventListener('drop', e => {
	console.log('Drop');
	respuestas3.appendChild(wordexample)
});
