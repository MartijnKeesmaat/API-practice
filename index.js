fetch('https://dog.ceo/api/breed/poodle/toy/images')
	.then(
		function (response) {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
          response.status);
				return;
			}
			response.json().then(function (data) {
				console.log(data);
				setDogs(data);
			});
		}
	)
	.catch(function (err) {
		console.log('Fetch Error :-S', err);
	});

const $ = el => document.querySelector(el);

function setDogs(data) {
	const dogDOM = $('#dogs');
	let blob = '';
	for (let i = 30; i < 100; i++) {
		const dog = data.message[i];
		blob += `<img src="${dog}"></img>`;
	}
	dogDOM.innerHTML = blob;
}

