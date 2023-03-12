const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const id = document.querySelector('#id').value;
	const airdrop = document.querySelector('#airdrop').value;

	// Do something with the user ID and airdrop SOL amount
	console.log('User ID:', id);
	console.log('Airdrop SOL:', airdrop);

	form.reset();
});
