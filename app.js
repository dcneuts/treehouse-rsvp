/**
 * Created by derek on 6/25/17.
 */
const FORM = document.getElementById('registrar');
const INPUT = FORM.querySelector('input');
const UL = document.getElementById('invitedList');

FORM.addEventListener('submit', (e) => {
	e.preventDefault();
	const TEXT = INPUT.value;
	INPUT.value = "";
	const LI = document.createElement('li');
	LI.textContent = TEXT;
	const LABEL = document.createElement('label');
	LABEL.textContent = 'Confirmed';
	const CHECKBOX = document.createElement('input');
	CHECKBOX.type = 'checkbox';
	LABEL.appendChild(CHECKBOX);
	LI.appendChild(LABEL);
	UL.appendChild(LI);
});

UL.addEventListener('change', () => {
	const CHECKBOX = event.target;
	const CHECKED = CHECKBOX.checked;
	const LISTITEM = CHECKBOX.parentNode.parentNode;
	
	if (CHECKED) {
		LISTITEM.className = 'responded';
	} else {
		LISTITEM.className = '';
	}
});