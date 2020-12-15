export async function getInsult() {
	const url = 'https://shakespeare-insults-generator.herokuapp.com/getInsult';

	let response = await fetch(url);
    let data = await response.json();
    /*fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        showInsult(data);
    })*/

	return await data;
}