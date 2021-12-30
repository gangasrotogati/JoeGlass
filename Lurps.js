class Skill {
	constructor(name, level) {
		this.Name = name
		this.Level = level;
	}
}

class Character {
	constructor() {
		this.name = "unnamed";
		this.race = "Human";
		this.coreTrait = "";
		this.optionalTrait = "";
		this.job = "";
		this.skillSet = new Set();
		this.featSet = new Set();
		this.flawSet = new Set();
		this.itemSet = new Set();
		this.maxHealth = 10;
		this.maxSpeed = 10;
		this.maxMana = 10;
		this.characterValue = 0;
		this.description = "";

		this.skillSet.add(new Skill("Unarmed & Grappling", 2));
		this.race = "Human"
	}
}

let character = new Character();

function GenerateSkillSet() {
	let skillsSet = new Set();
	skillsSet.add("Alchemy & Poisons");
	skillsSet.add("Barter & Appraise");
	skillsSet.add("Bluff & Fast Talk");
	skillsSet.add("Climbing & Acrobatics");
	skillsSet.add("Combat Strategy & Leadership");
	skillsSet.add("Diplomacy & Persuasion");
	skillsSet.add("Engineering & Architecture");
	skillsSet.add("Fantastic Places & Magical Creatures");
	skillsSet.add("Feat of Strength & Resistance");
	skillsSet.add("Forgery, Logic & Codes");
	skillsSet.add("Gather Information & Streetwise");
	skillsSet.add("History & Geography");
	skillsSet.add("Identify Spells & Arcane Items");
	skillsSet.add("Intimidate & Interrogate");
	skillsSet.add("Medical Application & Physiology");
	skillsSet.add("Mundane Fauna, Flora & Fungi");
	skillsSet.add("Performance & Art");
	skillsSet.add("Pick Locks & Escape Artist");
	skillsSet.add("Pickpocket, Games & Sleight of Hand");
	skillsSet.add("Religion & Nobility");
	skillsSet.add("Riding & Animal Training");
	skillsSet.add("Sailing & Vehicles");
	skillsSet.add("Savoir-Faire & Infiltration");
	skillsSet.add("Searching & Perception");
	skillsSet.add("Sense Motive & Social Insight");
	skillsSet.add("Stealth & Disguise");
	skillsSet.add("Survival & Swim");
	skillsSet.add("Tinkering & Crafting");
	skillsSet.add("Traps & Escapology");
	skillsSet.add("Wits & Dialect");
	skillsSet.add("Slashing Weapons");
	skillsSet.add("Crushing Weapons");
	skillsSet.add("Piercing Weapons");
	skillsSet.add("Unarmed & Grappling");
	skillsSet.add("Bows & Crossbows");
	skillsSet.add("Gunpowder & Grenades");
	skillsSet.add("Fire & Light");
	skillsSet.add("Air & Lighting");
	skillsSet.add("Healing & Abjuration");
	skillsSet.add("Shadow & Illusion");
	skillsSet.add("Motion & Levitation");
	skillsSet.add("Earth & Nature");
	skillsSet.add("Water & Ice");
	skillsSet.add("Necromancy & Enchantment");
	skillsSet.add("Metal & Transmutation");
	skillsSet.add("Divination & Prediction");

	let text = "";
	for (const x of skillsSet.values()) {
		text += "<option>" + x + "</option>";
	}

	document.getElementById('skillset').innerHTML = text;
	UpdateSkillsList();
}

function GenerateFeatSet() {
	let featsSet = new Set();
	featsSet.add("Animal Affinity");
	featsSet.add("Armour Expert");
	featsSet.add("Arrow Snatch");
	featsSet.add("Beneath Notice");
	featsSet.add("Better Staunching");
	featsSet.add("Blue Blood");
	featsSet.add("Bowstaff Training");
	featsSet.add("Brewmaster");
	featsSet.add("Combat Archery");
	featsSet.add("Day Magic");
	featsSet.add("Druidic");
	featsSet.add("Duellist");
	featsSet.add("Ensorcell Item");
	featsSet.add("Fantastic Shot");
	featsSet.add("Forgettable Face");
	featsSet.add("Fully Literate");
	featsSet.add("Healthy");
	featsSet.add("Horseback Archer");
	featsSet.add("Improved Charge");
	featsSet.add("Improved Disarming");
	featsSet.add("Improved Dual Weapon Fighting");
	featsSet.add("Inspirational Leader");
	featsSet.add("Lip Reader");
	featsSet.add("Magic Fingers");
	featsSet.add("Mana-Sensitive");
	featsSet.add("Military Rank");
	featsSet.add("Mind & Body");
	featsSet.add("Night Magic");
	featsSet.add("Piercing Shots");
	featsSet.add("Pinning Shot");
	featsSet.add("Plentiful Ammo");
	featsSet.add("Polearm Master");
	featsSet.add("Precise Shot");
	featsSet.add("Prepared");
	featsSet.add("Press The Attack");
	featsSet.add("Quick Draw");
	featsSet.add("Quintessence Magic");
	featsSet.add("Rage");
	featsSet.add("Skill Focus");
	featsSet.add("Skirmisher");
	featsSet.add("Sorcerous Familiar");
	featsSet.add("Tough");
	featsSet.add("Volley Fire");
	featsSet.add("Warmage");
	featsSet.add("Weapon Focus (Melee)");
	featsSet.add("Weapon Focus (Range)");
	featsSet.add("Wizardly Training");
	featsSet.add("Forceful Spell");
	featsSet.add("Penetrating Spell");
	featsSet.add("Persistent Spell");
	featsSet.add("Reaching Spell");
	featsSet.add("Seeking Spell");
	featsSet.add("Silent Spell");

	let text = "";
	for (const x of featsSet.values()) {
		text += "<option>" + x + "</option>";
	}

	document.getElementById('featset').innerHTML = text;
}

function GenerateFlawSet() {
	let flawsSet = new Set();
	flawsSet.add("Addictions");
	flawsSet.add("Alchemical Distrust");
	flawsSet.add("Amnesia");
	flawsSet.add("Aura of Bad Magic");
	flawsSet.add("Bad Temper");
	flawsSet.add("Blabber-Mouth");
	flawsSet.add("Bloodlust");
	flawsSet.add("Burn the Witch!");
	flawsSet.add("Cannot Ride");
	flawsSet.add("Claustrophobia");
	flawsSet.add("Clean Freak");
	flawsSet.add("Code Of Honour");
	flawsSet.add("Colour Blind");
	flawsSet.add("Dominant Handed");
	flawsSet.add("Duty");
	flawsSet.add("Eldritch Obsessions");
	flawsSet.add("Ex-Army");
	flawsSet.add("Fat");
	flawsSet.add("Finery First");
	flawsSet.add("Frugal");
	flawsSet.add("Glutton");
	flawsSet.add("Grandiose");
	flawsSet.add("Heritage (Demonic)");
	flawsSet.add("Heritage (Fey)");
	flawsSet.add("Heritage (Vampiric)");
	flawsSet.add("Honest");
	flawsSet.add("Illiteracy");
	flawsSet.add("Impatient");
	flawsSet.add("Mania");
	flawsSet.add("Miopic");
	flawsSet.add("Narcissistic");
	flawsSet.add("Need Source of Element To Cast Spells");
	flawsSet.add("Nosy");
	flawsSet.add("Over Spender");
	flawsSet.add("Paranoia");
	flawsSet.add("Phobia");
	flawsSet.add("Pious");
	flawsSet.add("Possessive");
	flawsSet.add("Pride");
	flawsSet.add("Queasy");
	flawsSet.add("Racist");
	flawsSet.add("Religious Zealot");
	flawsSet.add("Reputation");
	flawsSet.add("Strict Diet");
	flawsSet.add("Sickly");
	flawsSet.add("Slow");
	flawsSet.add("Slow Healer");
	flawsSet.add("Snobby");
	flawsSet.add("Social Stigma");
	flawsSet.add("Ugly");
	flawsSet.add("Unstable Casting");
	flawsSet.add("Vertigo");

	let text = "";
	for (const x of flawsSet.values()) {
		text += "<option>" + x + "</option>";
	}

	document.getElementById('flawset').innerHTML = text;
}

function GenerateJobsSet() {
	let jobsSet = new Set();
	jobsSet.add("Advisor");
	jobsSet.add("Ale-Conner");
	jobsSet.add("Animal Trainer");
	jobsSet.add("Apothecary");
	jobsSet.add("Assassin");
	jobsSet.add("Barber-Surgeon");
	jobsSet.add("Bowyer");
	jobsSet.add("Carpenter");
	jobsSet.add("Cobbler");
	jobsSet.add("Demonologist");
	jobsSet.add("Dyer");
	jobsSet.add("Engineer");
	jobsSet.add("Falconer");
	jobsSet.add("Farrier");
	jobsSet.add("Fletcher");
	jobsSet.add("Footman");
	jobsSet.add("Forester");
	jobsSet.add("Grave Robber");
	jobsSet.add("Herald");
	jobsSet.add("Highway Man");
	jobsSet.add("Knight");
	jobsSet.add("Medic");
	jobsSet.add("Merchant");
	jobsSet.add("Militia");
	jobsSet.add("Noble");
	jobsSet.add("Page");
	jobsSet.add("Peasant / Serf");
	jobsSet.add("Priest");
	jobsSet.add("Reeve");
	jobsSet.add("Sailor");
	jobsSet.add("Scribe");
	jobsSet.add("Soldier");
	jobsSet.add("Squire");
	jobsSet.add("Tailor");
	jobsSet.add("Tinker");
	jobsSet.add("Witch");
	jobsSet.add("Executioner");
	jobsSet.add("Sin Eater");
	jobsSet.add("Leech Collector");


	let text = "";
	for (const x of jobsSet.values()) {
		text += "<option>" + x + "</option>";
	}

	document.getElementById('jobset').innerHTML = text;
}

window.onload = function () {
	GenerateSkillSet();
	GenerateFeatSet();
	GenerateFlawSet();
	GenerateJobsSet();
}

function AddFeat() {
	//check if the feat already exists in the set
	let featmatchfound = false;
	character.featSet.forEach(function (feat) {
		let text = feat;
		if (text == document.getElementById("featset").value) {
			featmatchfound = true;
		}
	})
	//if it doesnt exist then add it to the character feat set 
	if (featmatchfound == false) {
		character.featSet.add(document.getElementById("featset").value);
	}
	UpdateFeatsList();
}

function AddFlaw() {
	//check if the flaw already exists in the set
	let flawmatchfound = false;
	character.flawSet.forEach(function (flaw) {
		let text = flaw;
		if (text == document.getElementById("flawset").value) {
			flawmatchfound = true;
		}
	})
	//if it doesnt exist then add it to the character flaw set 
	if (flawmatchfound == false) {
		character.flawSet.add(document.getElementById("flawset").value);
	}
	UpdateFlawsList();
}

function AddSkill() {

	//check if the skill already exists in the set
	let skillmatchfound = false;
	character.skillSet.forEach(function (skill) {
		let text = skill.Name;
		if (text.substring(0, 5) == document.getElementById("skillset").value.substring(0, 5)) {
			skillmatchfound = true;
		}
	})
	//if it doesnt exist then add it to the character skill set 
	if (skillmatchfound == false) {
		character.skillSet.add(new Skill(document.getElementById("skillset").value, 1));
    }
	UpdateSkillsList();
}

function RandomJob() {
	let rand = Math.floor(Math.random() * 39);
	document.getElementById("jobset").value = document.getElementById("jobset").options[rand].text;
}

//This method adds unarmed and grappling on loading the webpage. The other function is hardcoded to reference the skill selector.
function AddNewSkill(element, level) {

	//check if the skill already exists in the set
	let skillmatchfound = false;
	character.skillSet.forEach(function (skill) {
		let text = skill.Name;
		console.log(text);
		console.log(element.substring(0, 5));
		if (text.substring(0, 5) == element.substring(0, 5)) {
			skillmatchfound = true;
		}
	})
	//if it doesnt exist then add it to the character skill set 
	if (skillmatchfound == false) {
		character.skillSet.add(new Skill(element.value, level));
	}
	UpdateSkillsList();
}

function AddJob() {
	character.job = document.getElementById("jobset").value;
}

function AlterSelectValue(element) {
	let type = element.type;
	console.log(element);
	switch (type) {
		case "feattag":
			document.getElementById("featset").value = value;
			break;
		case "flawtag":
			document.getElementById("flawset").value = value;
			break;
		case "skilltag":
			document.getElementById("skillset").value = value;
			break;
    }
}

function AlterFeatSelect(element) {
	document.getElementById("featset").value = element.innerHTML;
}
function AlterFlawSelect(element) {
	document.getElementById("flawset").value = element.innerHTML;
}
function AlterSkillSelect(element) {
	let text = element.innerHTML
	selector = document.getElementById("skillset")
	for (let x of selector.options) {
		if (x.text.substring(0, 5) == text.substring(0, 5)) {
			console.log(x);
			console.log(text.substring(0, 5));
			document.getElementById("skillset").value = x.text;
        }
    }
}

function IncreaseSkill() {
	for (let x of document.getElementsByClassName("skilltag")) {
		if (x.id == "selected") {
			character.skillSet.forEach(function (skill) {
				let text = skill.Name;
				if (text.substring(0, 5) == x.innerHTML.substring(0, 5)) {
					if (skill.Level < 7) {
						skill.Level++;
                    }
				}
			})
		}
	}
	UpdateSkillsList();
}

function DecreaseSkill(element) {
	for (let x of document.getElementsByClassName("skilltag")) {
		if (x.id == "selected") {
			character.skillSet.forEach(function (skill) {
				let text = skill.Name;
				if (text.substring(0, 5) == x.innerHTML.substring(0, 5)) {
					if (skill.Level > 1) {
						skill.Level--;
					}
				}
			})
		}
	}
	UpdateSkillsList();
}

function UpdateFeatsList() {
	//keep the selected feat in memory
	let selectedText = "";
	for (let x of document.getElementsByClassName("feattag")) {
		if (x.id == "selected") {
			selectedText = x.innerHTML;
		}
	}
	//erase all displayed feats
	document.getElementById('featsection').innerHTML = "";
	//redraw the feats
	for (let x of character.featSet.values()) {
		let text = '<p class = "feattag" id = "unselected" style = "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--bright-gray);" onclick = "SelectFeat(this); AlterFeatSelect(this); DisplayFeatDescription();">' + x + "</p>";
		document.getElementById('featsection').innerHTML += text;
	}

	//reselect the selected feat
	for (let x of document.getElementsByClassName("feattag")) {
		if (x.innerHTML == selectedText) {
			x.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--dark-red);");
			x.setAttribute("id", "selected");
		}
	}
}

function UpdateFlawsList() {
	//keep the selected flaw in memory
	let selectedText = "";
	for (let x of document.getElementsByClassName("flawtag")) {
		if (x.id == "selected") {
			selectedText = x.innerHTML;
		}
	}
	//erase all displayed flaws
	document.getElementById('flawsection').innerHTML = "";
	//redraw the flaws
	for (let x of character.flawSet.values()) {
		let text = '<p class = "flawtag" id = "unselected" style = "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--bright-gray);" onclick = "SelectFlaw(this); AlterFlawSelect(this); DisplayFlawDescription();">' + x + "</p>";
		document.getElementById('flawsection').innerHTML += text;
	}

	//reselect the selected feat
	for (let x of document.getElementsByClassName("flawtag")) {
		if (x.innerHTML == selectedText) {
			x.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--dark-red);");
			x.setAttribute("id", "selected");
		}
	}
}

function UpdateSkillsList() {
	//keep the selected skill in memory
	let selectedText = "";
	for (let x of document.getElementsByClassName("skilltag")) {
		if (x.id == "selected") {
			selectedText = x.innerHTML.substring(0, 5);
        }
	}
	//erase all displayed skills
	document.getElementById('skillsection').innerHTML = "";

	//sort the skills by level descending
	const skillsArray = Array.from(character.skillSet)
	skillsArray.sort((a, b) => {
		return b.Level - a.Level;
	});
	character.skillSet = new Set(skillsArray);

	//redraw the skills
	for (let x of character.skillSet.values()) {
		let text = '<p class = "skilltag" id = "unselected" style = "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--bright-gray);" onclick = "SelectSkill(this); AlterSkillSelect(this); DisplaySkillDescription(this);">' + x.Name + "\t" + x.Level + "</p>";
		document.getElementById('skillsection').innerHTML += text;
	}

	//reselect the selected skill
	for (let x of document.getElementsByClassName("skilltag")) {
		if (x.innerHTML.substring(0, 5) == selectedText) {
			x.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--dark-red);");
			x.setAttribute("id", "selected");
		}
	}
}

function RemoveFeat() {
	for (let x of document.getElementsByClassName("feattag")) {
		if (x.id == "selected") {
			character.featSet.forEach(function (feat) {
				let text = feat;
				if (text == x.innerHTML) {
					character.featSet.delete(feat);
				}
			})
		}
	}
	UpdateFeatsList();
}

function RemoveFlaw() {
	for (let x of document.getElementsByClassName("flawtag")) {
		if (x.id == "selected") {
			character.flawSet.forEach(function (flaw) {
				let text = flaw;
				if (text == x.innerHTML) {
					character.flawSet.delete(flaw);
				}
			})
		}
	}
	UpdateFlawsList();
}

function RemoveSkill() {
	for (let x of document.getElementsByClassName("skilltag")) {
		if (x.id == "selected") {
			character.skillSet.forEach(function (skill) {
				let text = skill.Name;
				if (text.substring(0, 5) == x.innerHTML.substring(0, 5)) {
					character.skillSet.delete(skill);
                }
			})
		}
	}
	UpdateSkillsList();
}

function SelectFeat(feat) {
	let id = feat.id
	for (let x of document.getElementsByClassName("feattag")) {
		if (x.id == "selected") {
			x.setAttribute("id", "unselected");
			x.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--bright-gray);");
		}
	}
	if (id == "unselected") {
		feat.setAttribute("id", "selected");
		feat.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--dark-red);");
	}
}

function SelectSkill(skill) {
	let id = skill.id
	for (let x of document.getElementsByClassName("skilltag")) {
		if (x.id == "selected") {
			x.setAttribute("id", "unselected");
			x.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--bright-gray);");
		}
	}
	if (id == "unselected") {
		skill.setAttribute("id", "selected");
		skill.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--dark-red);");
	}
}

function SelectFlaw(flaw) {
	let id = flaw.id
	for (let x of document.getElementsByClassName("flawtag")) {
		if (x.id == "selected") {
			x.setAttribute("id", "unselected");
			x.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--bright-gray);");
		}
	}
	if (id == "unselected") {
		flaw.setAttribute("id", "selected");
		flaw.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--dark-red);");
	}
}

function SelectSkill(skill) {
	let id = skill.id
	for (let x of document.getElementsByClassName("skilltag")) {
		if (x.id == "selected") {
			x.setAttribute("id", "unselected");
			x.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--bright-gray);");
		}
	}
	if (id == "unselected") {
		skill.setAttribute("id", "selected");
		skill.setAttribute("style", "margin: auto; padding: 5px; background-color: var(--off-white); border-style: solid; border-color: var(--dark-red);");
	}
}

function SetRandomName() {
	character.name = RandomName(character.race);
	document.getElementById('name').value = character.name;
}

function SetCharacterName() {
	character.name = document.getElementById('name').value;
}

function SetCharacterRace() {
	character.race = document.getElementById('race').value;
	SetRaceDescription(character.race);
	SetCoreTrait();
	SetTraitOptions()
}

function SetRaceDescription(race) {

	let x = "";

	if (race == "Human") {
		x = "Humans are a prolific race which the Gods seemingly have made as a joke. They have invented several competing languages, making communication between themselves impossible outside their own lands. Their bite can cause sepsis, they excrete an explosive gas and they fight each other based on the colour of their hides. In between waging war on each other because they can, they work together furiously to build for themselves, often creating structures that are excessively large. They exist on an unbalanced diet of fats, sugars and substances they know to be toxic to themselves. They lack the dexterity to scratch their own backs and cannot even contort to be able to reach most of it with their tongue. Humans have deep emotional attachments to many ideals such as honour, duty and nobility. These tend to push humans further forward than most races would expect them to, where someone may give up in a hopeless situation a human will blindly continue the path because someone of a higher station ordered it to. Their mass numbers and luck have propelled them to be the dominate race. When the sciences and arts flourished, they simultaneously promoted and suppressed it.";
	}
	if (race == "Rooskald") {
		x = "The Rooskald are actually named after the town they originate from. Many centuries ago, they were cursed by an entity to become bears. The brunt of the curse was short lived, but it was left its mark on their race permanently. Rooskald are still almost identical to humans mentally, but they feel primal urges more powerfully. Namely the urge to hunt, to protect their homes and families, an appreciation for raw meat and other ursine qualities. The curse is hereditary, but not a guaranteed thing. Even so, for most of their existence in history, humans have shunned them for their bestial looks. It is only recently that they have come to terms with them, but the prejudice still hangs in the air. Rooskald are identified by their overly large canine teeth, thick bodily (especially facial) hair, hands which feature thick claws and slightly hunched and stocky stature. They tend to grow tall for a human.";
	}
	if (race == "Erlkin") {
		x = "Standing slightly taller than a human, with crowns of antlers around their heads, erlkin resemble elks or deer. They possess unguligrade legs with longer, slightly claw shaped hooves on their feet and thin gangly torsos. They are covered in thin down of light fur, matching them further with elks complete with spots during summer seasons. Their heads are humanoid, but they possess eyes like that of a wild cat - made of yellows and ambers.";
	}
	if (race == "Dwarf") {
		x = "Dwarves live in highly micromanaged kingdoms. The monarchs are not true figureheads, they actually find themselves holding down another job or sometimes even two! They typically take up traditional dwarven jobs like farming, goat herding or sciences. Being monarch just means they get more funding and authority. For all state matters, the dwarf with the most money are nobles.Dwarves like art, art sells for loads of money, and only the most insane dwarves make the best art(according to the dwarves).As such, nobles are frequently not - all - there, so to speak.They have been known to wage wars on pointless things, like elephants(for being tall), unicorns(for not being proper horses) and Scottish dwarves(for being more drunk than them).For whatever reason, many dwarves suffer from major mood swings nationwide.Due to their love of booze and gunpowder, dangerous chemicals and science, the insides of abandoned dwarven holds are often found still on fire.";
	}
	if (race == "Orc") {
		x = "Orcs stand just above a human in height, have a greenish-tanned skin and live in nomadic tribes, constantly travelling. Orcs are highly competitive, as shown for their love of combat. The rules for all of these competitions are not always the same, some orcs consider honour to be the major feature, others consider the kill count. With their roving nature, some form mercenary warbands for hire. While they are gruff and blunt by nature, orcs are not stupid at all. Orcs live in a hierarchal caste society, meaning some orcs of high status and birth must travel vast distances in order to find a mate of compatible status. (inbreeding is very definitely not a thing for orcs, who find the human royalties’ penchants for it disgusting). Orcs have set travel paths for their tribes. They move between mining pits, where orcs who do not travel forge weapons and armour, something their race is well known for to produce high quality goods. Orcs who do not travel and instead mine and smith for their kind are considered a separate caste from the rest. They have their own orc laws and customs, and are considered as one whole society, neutral from all other orcs.";
	}
	if (race == "Goblin") {
		x = "Small and green skinned, with large pointed floppy ears like a basset hound - these are the hallmarks of a goblin. They have a preternatural skill at surviving in all sorts of environments. With no real culture of their own, they prefer living in ruins and the outskirts of cities. You will frequently find them employed to wizards and watchmakers alike, as they are easily motivated by food and display a remarkable affinity for tinkering. Goblins are unlike their yellow skinned half-breed brothers, Hobgoblins as that they lack the more violent tendencies, relying more on critical thinking skills. They stand around waist height and possess pointed needle like teeth - preferring dirty tactics over honest muscle if the situation demands a fight. While goblins claim to not understand many concepts like honour, possession, honesty and manners, more often the truth is they choose to ignore these ideals at their convenience.";
	}
	if (race == "Satyr") {
		x = "Satyr aspire to become favoured with the fey, which puts them at odds with other races who find the courts to be a deadly nuisance. In doing this, they have adopted the attitudes, methods and forms as best as their mortal bodies can. They act airily, indulging in philosophy, opulence and festivals of all kinds. They have no fixed home, capital, government or anything of that sort. Their carefree lifestyle often makes them nomadic and prone to wandering. Those drawn to civilization are normally peddlers of trinkets and instruments. Many take up careers as bards and entertainers, using their culture’s image as a boon rather than a social drawback. An ancient race, their stories and oral traditions go back further than that of any other race. They were the first to invent writing, both literature and music, and as such all races use their style of musical notation to this day. They believe if they become independent of other races, the Fey will finally accept them. Some scholars theorise this is merely a cruel joke by the Fey, an impossible task to complete for a reward that is never going to come.";
	}
	if (race == "Kobold") {
		x = "Kobolds could be described as the lowest rung on the race- ladder of the dragons. They will never grow as large as even the smallest wyrms, they lack any wings or even tails larger than a clenched fist. They do not breathe fire, they lack the sacks of flammable gas or liquids that other dragons have to ignite, but they still possess the teeth to make the sparks to ignite it. This trait sometimes shows through when they become angry, literally spitting sparks during heated moments. They can easily trace their dragon sub-race heritage by the colour of their scales and the shape of their spines. These features can be a source of racism; many dragon races had wars in the past based on many grand opinions on the world. Similarly, kobold history is a complex series of feuds, wars, proxy-wars, grudges and sometimes misplaced spite. Kobolds are great historians and value literacy. This is for two main reasons, one to keep track of the dragon-feuds and to maintain their status as the smartest of dragons.";
	}

	document.getElementById('raceDescription').innerHTML = x;
}

function SetCoreTrait() {

	switch (character.race) {
		case "Human":
			character.coreTrait = "Press On";
			break;
		case "Rooskald":
			character.coreTrait = "Cursed Heritage";
			break;
		case "Erlkin":
			character.coreTrait = "Swift";
			break;
		case "Dwarf":
			character.coreTrait = "Stubborn";
			break;
		case "Orc":
			character.coreTrait = "Discipline";
			break;
		case "Goblin":
			character.coreTrait = "Cave Adaptation";
			break;
		case "Satyr":
			character.coreTrait = "Gift of the Gab";
			break;
		case "Kobold":
			character.coreTrait = "Survivalist";
			break;
	}

	document.getElementById('coreTrait').value = character.coreTrait;
}

function SetTraitOptions() {
	switch (character.race) {
		case "Human":
			document.getElementById('optionalTrait').innerHTML = "<option>Generalist</option><option>Specialist</option>";
			break;
		case "Rooskald":
			document.getElementById('optionalTrait').innerHTML = "<option>Claws</option><option>Frigid North</option>";
			break;
		case "Erlkin":
			document.getElementById('optionalTrait').innerHTML = "<option>Ambush</option><option>Unnatural Grace</option>";
			break;
		case "Dwarf":
			document.getElementById('optionalTrait').innerHTML = "<option>Stalwart</option><option>Strong Grip</option>";
			break;
		case "Orc":
			document.getElementById('optionalTrait').innerHTML = "<option>Specialist</option><option>Battle Trance</option>";
			break;
		case "Goblin":
			document.getElementById('optionalTrait').innerHTML = "<option>Impatient</option><option>Me First</option>";
			break;
		case "Satyr":
			document.getElementById('optionalTrait').innerHTML = "<option>Agile</option><option>Sniper Shot</option>";
			break;
		case "Kobold":
			document.getElementById('optionalTrait').innerHTML = "<option>Alert</option><option>Colored Scales (Fire)</option><option>Colored Scales (Ice)</option><option>Colored Scales (Lightning)</option><option>Colored Scales (Poison & Venom)</option>";
			break;
	}
}

document.addEventListener('keypress', function (e) {
	if (e.keyCode === 13 || e.which === 13) {
		e.preventDefault();
		return false;
	}

});