const word1 = document.querySelector("#palabra1");
const word2 = document.querySelector("#palabra2");
const word3 = document.querySelector("#palabra3");
const word4 = document.querySelector("#palabra4");
const word5 = document.querySelector("#palabra5");
const word6 = document.querySelector("#palabra6");
const word7 = document.querySelector("#palabra7");
const word8 = document.querySelector("#palabra8");
const word9 = document.querySelector("#palabra9");
const btn = document.querySelector("#tamaño_003");
const letrero = document.querySelector("#correcto2");
var wordexample = 0;
const word9set = document.querySelector("#word9");
const word2set = document.querySelector("#word2");
const word4set = document.querySelector("#word4");
const gifcorrecto = document.querySelector("#gifcorrecto")
const letreromascota = document.querySelector("#letreromascota")
const letreromascota2 = document.querySelector("#letreromascota2")


var word1id = 0
var word2id = 1
var word3id = 0
var word4id = 2
var word5id = 0
var word6id = 0
var word7id = 0
var word8id = 0
var word9id = 3

word1.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word1
	wordexampleid=word1id
})


word2.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word2
	wordexampleid=word2id

})

word3.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word3
	wordexampleid=word3id

})

word4.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word4
	wordexampleid=word4id

})

word5.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word5
	wordexampleid=word5id

})

word6.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word6
	wordexampleid=word6id

})

word7.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word7
	wordexampleid=word7id

})

word8.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word8
	wordexampleid=word8id

})

word9.addEventListener('dragstart', e => {
	console.log('Drag Start');
	wordexample=word9
	wordexampleid=word9id

})



