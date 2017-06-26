/**
 * Created by derek on 6/25/17.
 */
const FORM = document.getElementById('registrar');
const INPUT = FORM.querySelector('input');

FORM.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(INPUT.value);
});