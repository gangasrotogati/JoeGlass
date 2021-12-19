function RandomName(race)
{
	let rand = Math.floor(Math.random() * 10);
	let name = "";

	if (race == "Human")
	{
		switch(rand){
			case 0:
				name = "Alastair";
				break;
			case 1:
				name = "Keiran";
				break;
			case 2:
				name = "Brighton";
				break;
			case 3:
				name = "Lucien";
				break;
			case 4:
				name = "Evander";
				break;
			case 5:
				name = "Edmund";
				break;
			case 6:
				name = "Eliot";
				break;
			case 7:
				name = "Fynn";
				break;
			case 8:
				name = "Caine";
				break;
			case 9:
				name = "Calix";
		}
	}
	if (race == "Rooskald") {
		switch (rand) {
			case 0:
				name = "Eilif Kirby";
				break;
			case 1:
				name = "Thorvald Estella";
				break;
			case 2:
				name = "Hjalmer Halle";
				break;
			case 3:
				name = "Langford Liv";
				break;
			case 4:
				name = "Kirkus Heiman";
				break;
			case 5:
				name = "Kelbie Ballard";
				break;
			case 6:
				name = "Steinard Dale";
				break;
			case 7:
				name = "Reynaud Garret";
				break;
			case 8:
				name = "Hallverd Reinhart";
				break;
			case 9:
				name = "Thorin Osborn";
		}
	}
	if (race == "Erlkin") {
		switch (rand) {
			case 0:
				name = "Constance";
				break;
			case 1:
				name = "Hope";
				break;
			case 2:
				name = "Shade";
				break;
			case 3:
				name = "Summer";
				break;
			case 4:
				name = "Purity";
				break;
			case 5:
				name = "Difference";
				break;
			case 6:
				name = "Vainity";
				break;
			case 7:
				name = "Freegift";
				break;
			case 8:
				name = "Prudence";
				break;
			case 9:
				name = "Glade";
		}
	}
	if (race == "Dwarf") {
		switch (rand) {
			case 0:
				name = "Felix Bronzebeard";
				break;
			case 1:
				name = "Hans Granitetooth";
				break;
			case 2:
				name = "Klaus Coppermind";
				break;
			case 3:
				name = "Hermann Ironborne";
				break;
			case 4:
				name = "Nicolas Stouthammer";
				break;
			case 5:
				name = "Jochen Silverfist";
				break;
			case 6:
				name = "Liam Barrelforge";
				break;
			case 7:
				name = "Tobias Underhill";
				break;
			case 8:
				name = "Marius Tinkerwell";
				break;
			case 9:
				name = "Egon Direfrost";
		}
	}
	if (race == "Orc") {
		switch (rand) {
			case 0:
				name = "Speaks-To-Winds";
				break;
			case 1:
				name = "Earth-Carver";
				break;
			case 2:
				name = "Strongarm";
				break;
			case 3:
				name = "Farseer";
				break;
			case 4:
				name = "Honour-Guard";
				break;
			case 5:
				name = "Toof";
				break;
			case 6:
				name = "Herd-Watcher";
				break;
			case 7:
				name = "Crazyeye";
				break;
			case 8:
				name = "Sharpfang";
				break;
			case 9:
				name = "Greenskin";
		}
	}
	if (race == "Goblin") {
		switch (rand) {
			case 0:
				name = "Gobsnob";
				break;
			case 1:
				name = "Toesnik";
				break;
			case 2:
				name = "Brandbite";
				break;
			case 3:
				name = "Torriks";
				break;
			case 4:
				name = "Sessil";
				break;
			case 5:
				name = "Ungrack";
				break;
			case 6:
				name = "Knobbler";
				break;
			case 7:
				name = "Nibbly";
				break;
			case 8:
				name = "Farkle";
				break;
			case 9:
				name = "Butkus";
		}
	}
	if (race == "Satyr") {
		switch (rand) {
			case 0:
				name = "Claudius";
				break;
			case 1:
				name = "Hadrian";
				break;
			case 2:
				name = "Crassus";
				break;
			case 3:
				name = "Chronos";
				break;
			case 4:
				name = "Lucius";
				break;
			case 5:
				name = "Titus";
				break;
			case 6:
				name = "Antonia";
				break;
			case 7:
				name = "Flavius";
				break;
			case 8:
				name = "Marcus";
				break;
			case 9:
				name = "Basilius";
		}
	}
	if (race == "Kobold") {
		switch (rand) {
			case 0:
				name = "Carnifrax the Destroyer";
				break;
			case 1:
				name = "Draco the Red";
				break;
			case 2:
				name = "Longwei the Great";
				break;
			case 3:
				name = "Drakon";
				break;
			case 4:
				name = "Ormr";
				break;
			case 5:
				name = "Pendragon";
				break;
			case 6:
				name = "Pythios";
				break;
			case 7:
				name = "Ryuu";
				break;
			case 8:
				name = "Coatl the Wind Serpent";
				break;
			case 9:
				name = "Astarot";
		}
	}
	return name;
}