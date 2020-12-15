import { getInsult } from './modules/get.js';

const insultButton = document.querySelector('#insult-button');
const insultElem = document.querySelector('#insult');
const playElem = document.querySelector('#play');

// async function getInsult() {
// 	const url = 'https://shakespeare-insults-generator.herokuapp.com/getInsult';

//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//     } catch(error) {
//         console.log(error)
//     }
    
//     fetch(url).then(function(response) {
//         return response.json();
//     }).then(function(data) {
//         showInsult(data);
//     }).catch(function(error) {
//         console.log(error);
//     })

// 	return await data;
// }


function showInsult(insultObj) {
	console.log('insultObj:', insultObj);
	insultElem.innerHTML = insultObj.insult;
	playElem.innerHTML = ' - ' + insultObj.play;
}

insultButton.addEventListener('click', async function() {
	//Göra anrop mot Shakespeare API med fetch
	//När jag får ett svar visa för användaren
    let insult = await getInsult();
    showInsult(insult);
});