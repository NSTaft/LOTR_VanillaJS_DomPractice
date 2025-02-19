console.log('Linked.')
// Without adding this variable to make body global, appendChild will not work
const body = document.getElementsByTagName("body");

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const middleEarthEl = document.createElement("section");
	middleEarthEl.setAttribute("id", "middle-earth");
	console.log(middleEarthEl);
	// 2. use a for loop to iterate over the lands array that does the following:
		lands.forEach( land => {
			console.log(land)
	//   2a. creates an article tag (there should be one for each land when the loop is done)
			const landEl = document.createElement("article");

	//   2b. gives each land article an `id` tag of the corresponding land name
			landEl.setAttribute("id", `${land}`);

	//   2c. includes an h1 with the name of the land inside each land article
			const landName = document.createElement("h1");
			landName.innerHTML = `${land}`;
	//   2d. appends each land to the middle-earth section
			landEl.appendChild(landName);

	// 3. append the section to the body of the DOM.
			middleEarthEl.appendChild(landEl)
			body[0].appendChild(middleEarthEl)
}) }



// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')	

	// display an `unordered list` of hobbits in the shire
	const hobbitList = document.createElement("ul");
	hobbitList.id = "hobbitUL";
	// give each hobbit a class of `hobbit`
	hobbits.forEach( residents => {
		const hobbitClass = document.createElement("li");
		console.log(residents);
		hobbitList.appendChild(hobbitClass)
		hobbitClass.innerHTML = `${residents}`
		hobbitClass.id = (residents);
	});

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
	document.getElementById("The-Shire").appendChild(hobbitList);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe');
	// create a div with an id of `'the-ring'`
	let ringDiv = document.createElement("div");
	ringDiv.setAttribute("id", "the-ring");
	console.log(ringDiv);

	// give the div a class of `'magic-imbued-jewelry'`
	ringDiv.classList.add("magic-imbued-jewelry");
	console.log(ringDiv);

	// add the ring as a child of `Frodo`
	let hobbitList = document.querySelector("ul");
	console.log(hobbitList);
	let frodo = hobbitList.children[0];
	//.children DOM manipulator
	frodo.appendChild(ringDiv);
	console.log(frodo);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const baddyList = document.createElement("ul");
	baddyList.setAttribute = "id", "baddyUL";

	// give each of the baddies a class of "baddy"
	baddies.forEach( badDudes => {
		const baddyClass = document.createElement("li");
		console.log(badDudes);
		baddyList.appendChild(baddyClass);
		baddyClass.innerHTML = `${badDudes}`
	});
	// remember to append them to Mordor
	document.getElementById("Mordor").appendChild(baddyList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const aside = document.createElement("aside");
	console.log(aside);
	// put an `unordered list` of the `'buddies'` in the aside
	const teamUL = document.createElement("ul");
	teamUL.id = "teamUL"; //with ID
	aside.appendChild(teamUL);
	teamUL.classList.add("buddies");
	document.getElementById("Rivendell").appendChild(aside);
	// insert your aside as a child element of `rivendell`
	// Have to call rivendell from HTML
	buddies.forEach(bud => {
		const teamLI = document.createElement("li"); // just like previous functions
		teamLI.id=bud;
		teamLI.textContent = bud;

		//Append class
		teamUL.appendChild(teamLI);
	});
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	//call the hobbits and append to rivendell
	const hobbitList = document.getElementById("hobbitUL");
	const rivendell = document.getElementById("Rivendell");
	console.log(rivendell);
	rivendell.appendChild(hobbitList);
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	const strider = document.getElementById("Strider");
	console.log(strider);
	strider.textContent = "Aragorn";
	strider.id = "Aragorn";
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	const thefellowship = document.createElement("div");
	thefellowship.id = "fellowship";
	const fellowList = document.createElement("ul");
	console.log(fellowList)
	fellowList.id = "fellowList";
	const rivendell = document.getElementById("Rivendell");
	rivendell.appendChild(thefellowship);
	thefellowship.appendChild(fellowList);
	const hobbitList = Array.from(document.getElementById("hobbitUL").children);
	console.log(hobbitList, fellowList) 
	for (let hobbit of hobbitList) {
		fellowList.append(hobbit)
		console.log(`${hobbit.id} has joined the party.`)
		// alert(`${hobbit.id} has joined the party.`)
	}
		
	const teamUL = Array.from(document.getElementById("teamUL").children);
	for (let buddy of teamUL) {
		fellowList.append(buddy)
		alert(`${buddy.id} has joined the party.`)
	}
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	const gandalfWhite = document.getElementById("Gandalf the Grey");
	console.log(gandalfWhite)
	gandalfWhite.textContent = "Gandalf the White";
	gandalfWhite.id = "Gandalf the White"
	gandalfWhite.style.backgroundColor = "white";
	gandalfWhite.style.border = "gray 5px solid";
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	alert("The Horn of Gondor has been blown");
	const boromir = document.getElementById("Boromir");
	console.log(boromir);
	const fellowList = document.getElementById("fellowList")
	fellowList.removeChild(boromir);

	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone');

	let frodo = document.getElementById("Frodo Baggins");
	let samwise = document.getElementById('Samwise "Sam" Gamgee');
	let mordor = document.getElementById("Mordor");
	mordor.appendChild(frodo);
	mordor.appendChild(samwise);

	const mtDoom = document.createElement("div");
	mtDoom.id = "mtDoom";
	document.getElementById("Mordor").appendChild(mtDoom);

	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')

	let gollum = document.createElement("div");
	gollum.id = "gollum";
	console.log(gollum);
	let mordor = document.getElementById("Mordor");
	mordor.appendChild(gollum);

	let frodo = document.getElementById("Frodo Baggins")
	let ringDiv = document.getElementById("the-ring")
	gollum.appendChild(ringDiv)

	let mtDoom = document.getElementById("mtDoom");
	mtDoom.appendChild(gollum);
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')

	let gollum = document.getElementById("gollum");
	let mtDoom = document.getElementById("mtDoom");
	mtDoom.removeChild(gollum);

	let frodo = document.getElementById("Frodo Baggins");
	let samwise = document.getElementById('Samwise "Sam" Gamgee');
	let merry = document.getElementById('Meriadoc "Merry" Brandybuck');
	let pippin = document.getElementById('Peregrin "Pippin" Took');
	// let fellowList
	document.getElementById("The-Shire").appendChild(frodo);
	document.getElementById("The-Shire").appendChild(samwise);
	document.getElementById("The-Shire").append(merry);
	document.getElementById("The-Shire").append(pippin);


	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
