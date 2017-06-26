/**
 * Created by derek on 6/25/17.
 */
const FORM = document.getElementById('registrar');
const INPUT = FORM.querySelector('input');

FORM.addEventListener('submit', (e) => {
	e.preventDefault();
	const TEXT = INPUT.value;
	INPUT.value = "";
	const UL = document.getElementById('invitedList');
	const LI = document.createElement('li');
	LI.textContent = TEXT;
	UL.appendChild(LI);
});