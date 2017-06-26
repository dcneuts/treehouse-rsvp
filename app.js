/**
 * Created by derek on 6/25/17.
 */
const FORM = document.getElementById('registrar');
const INPUT = FORM.querySelector('input');
const UL = document.getElementById('invitedList');

function createLI(TEXT) {
	const LI = document.createElement('li');
	LI.textContent = TEXT;
	const LABEL = document.createElement('label');
	LABEL.textContent = 'Confirmed';
	const CHECKBOX = document.createElement('input');
	CHECKBOX.type = 'checkbox';
	LABEL.appendChild(CHECKBOX);
	LI.appendChild(LABEL);
	
	const EDITBUTTON = document.createElement('button');
	EDITBUTTON.textContent = 'edit';
	LI.appendChild(EDITBUTTON);
	
	const REMOVEBUTTON = document.createElement('button');
	REMOVEBUTTON.textContent = 'remove';
	LI.appendChild(REMOVEBUTTON);
	return LI;
}

// Event handler to add people to list on button press
FORM.addEventListener('submit', (e) => {
	e.preventDefault();
	const TEXT = INPUT.value;
	INPUT.value = "";
	const LI = createLI(TEXT);
	UL.appendChild(LI);
});

// Event handler to change styles
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

UL.addEventListener('click', (e) => {
	// To stop the edit button from being triggered due to it's position in the DOM
	if (e.target.tagName === 'BUTTON') {
		if (e.target.textContent === 'remove') {
			const LI = e.target.parentNode;
			const UL = LI.parentNode;
			UL.removeChild(LI);
		}
	}
});