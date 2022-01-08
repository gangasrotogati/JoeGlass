const http = require('http')
const fs = require('fs')
const url = require('url')
const atob = require("atob");
const port = process.env.PORT || 3000

const server = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/html' })
	let q = url.parse(req.url, true);
	if (q.pathname == "/") {
		q.pathname = "/default.html"
	}
	if (q.pathname == "/newcharacter") {
		console.log("New Character Registration Recieved...");
		console.log(q.query);
		console.log("---------");

		const folderName = 'characters'

		try {
			if (!fs.existsSync(folderName)) {
				fs.mkdirSync(folderName)
			}
		} catch (err) {
			console.error(err)
		}

		let fileObjs = fs.readdirSync('characters', { withFileTypes: true });
		let highestFileNumber = 0;

		fileObjs.forEach(file => {
			console.log(file.name)
			fileElements = file.name.split('-')
			if (fileElements[0] > highestFileNumber) {
				highestFileNumber = Number(fileElements[0]);
			}
		});

		highestFileNumber += 1; //label the new file as one higher than the highest file.

		let filePath = "characters/" + highestFileNumber + "-" + q.query.name + "-" + ".html";

		fs.writeFile(filePath, SaveCharacterData(q.query), function (err) {
			if (err) throw err;
			console.log('Saved ' + q.query.name + '.html');
		});

		res.write(GetCharacterData(q.query, filePath))
		res.end()
	}
	else if (q.pathname == '/characterdatabase') {
		res.write(DisplayCharacters())
		res.end()
    }
	else {
		let filename = "." + q.pathname;
		fs.readFile(filename, function (error, data) {
			if (error) {
				res.writeHead(404)
				res.write('Error: File Not Found')
			} else {
				res.write(data)
			}
			res.end()
		})
    }
})

server.listen(port, function(error){
	if(error) {
		console.log('Something went wrong', error)
	} else {
		console.log('Server is listening on port ' + port)
	}
})

function GetCharacterData(character, filePath) {
	let text = '<HTML>';
	text += '<head><link rel="stylesheet" href="../mystyle.css"></head>'
	text += '<body>'

	text += "<div class = centerbox>"
	text += "<div id='printhere' class = toolsection>";


	text += "<h2>" + character.name.replace(/ /g, "_") + "</h2>";
	text += "<ul>";
	text += "<li>" + character.race + "</li>";
	text += "<li>" + character.coreTrait + "</li>";
	text += "<li>" + character.optionalTrait + "</li>";
	text += "</ul >";
	text += "<ul>";
	text += "<li> HTP:" + character.maxHealth + "</li>";
	text += "<li> MAN:" + character.maxMana + "</li>";
	text += "<li> SPE:" + character.maxSpeed + "</li>";
	text += "</ul><ul>"
	text += "<li>" + character.job + "</li>";
	text += "<li>" + character.belief + "</li>";
	text += "</ul>";

	text += "<ul>";
	let featSet =  character.featSet.split(",")
	for (feat in featSet) {
		if (feat != featSet.length - 1) {
			text += "<li>" + featSet[feat] + "</li>"
        }
    }
	text += "</ul>";

	text += "<ul>";
	let flawSet = character.flawSet.split(",")
	for (flaw in flawSet) {
		if (flaw != flawSet.length - 1) {
			text += "<li>" + flawSet[flaw] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul>";
	let skillSet = character.skillSet.split(",")
	for (skill in skillSet) {
		if (skill != skillSet.length - 1) {
			let skillElements = skillSet[skill].split(".")
			text += "<li>" + skillElements[0].replace('amp', '&').replace('COMMA', ',') + "\t" + skillElements[1] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul>";
	let weaponSet = character.weaponSet.split(",")
	for (weapon in weaponSet) {
		if (weapon != weaponSet.length - 1) {
			let weaponElements = weaponSet[weapon].split(".")
			text += "<li>" + weaponElements[0] + "\t x" + weaponElements[1] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul>";
	let equipmentSet = character.equipmentSet.split(",")
	for (equipment in equipmentSet) {
		if (equipment != equipmentSet.length - 1) {
			let equipmentElements = equipmentSet[equipment].split(".")
			text += "<li>" + equipmentElements[0].replace('comm', ',') + "\t x" + equipmentElements[1] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul><li>" + character.silver + "s</li></ul>";

	text += "<ul><li>Character Value:" + character.characterValue + "</li></ul>";

	text += "<p>" + atob(character.description) + "</p>"

	text += "</div>"
	text += "<div class = linkbox>"
	text += "<p><a href =" + filePath + ">joeglass.azurewebsites.net/" + filePath + "</p>";
	text += "</div>"
	text += "</div>"
	text += "<div class = footer>"
	text += '<a href="../default.html">return</a>'
	text += "</div>"
	text += "</body></HTML>"

	return text
}

function SaveCharacterData(character) {
	let text = '<HTML>';
	text += '<head><link rel="stylesheet" href="../mystyle.css"></head>'
	text += '<body>'

	text += "<div class = centerbox>"
	text += "<div id='printhere' class = toolsection>";


	text += "<h2>" + character.name.replace(/ /g, "_") + "</h2>";
	text += "<ul>";
	text += "<li>" + character.race + "</li>";
	text += "<li>" + character.coreTrait + "</li>";
	text += "<li>" + character.optionalTrait + "</li>";
	text += "</ul >";
	text += "<ul>";
	text += "<li> HTP:" + character.maxHealth + "</li>";
	text += "<li> MAN:" + character.maxMana + "</li>";
	text += "<li> SPE:" + character.maxSpeed + "</li>";
	text += "</ul><ul>"
	text += "<li>" + character.job + "</li>";
	text += "<li>" + character.belief + "</li>";
	text += "</ul>";

	text += "<ul>";
	let featSet = character.featSet.split(",")
	for (feat in featSet) {
		if (feat != featSet.length - 1) {
			text += "<li>" + featSet[feat] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul>";
	let flawSet = character.flawSet.split(",")
	for (flaw in flawSet) {
		if (flaw != flawSet.length - 1) {
			text += "<li>" + flawSet[flaw] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul>";
	let skillSet = character.skillSet.split(",")
	for (skill in skillSet) {
		if (skill != skillSet.length - 1) {
			let skillElements = skillSet[skill].split(".")
			text += "<li>" + skillElements[0].replace('amp', '&').replace('COMMA', ',') + "\t" + skillElements[1] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul>";
	let weaponSet = character.weaponSet.split(",")
	for (weapon in weaponSet) {
		if (weapon != weaponSet.length - 1) {
			let weaponElements = weaponSet[weapon].split(".")
			text += "<li>" + weaponElements[0] + "\t x" + weaponElements[1] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul>";
	let equipmentSet = character.equipmentSet.split(",")
	for (equipment in equipmentSet) {
		if (equipment != equipmentSet.length - 1) {
			let equipmentElements = equipmentSet[equipment].split(".")
			text += "<li>" + equipmentElements[0].replace('comm', ',') + "\t x" + equipmentElements[1] + "</li>"
		}
	}
	text += "</ul>";

	text += "<ul><li>" + character.silver + "s</li></ul>";

	text += "<ul><li>Character Value:" + character.characterValue + "</li></ul>";

	text += "<p>" + atob(character.description) + "</p>"

	text += "</div>"
	text += "</div>"
	text += "<div class = footer>"
	text += '<a href="../default.html">return</a>'
	text += "</div>"
	text += "</body></HTML>"

	return text
}

function DisplayCharacters() {

	const folderName = 'characters'

	try {
		if (!fs.existsSync(folderName)) {
			fs.mkdirSync(folderName)
		}
	} catch (err) {
		console.error(err)
	}

	let files = fs.readdirSync(folderName)
	let list = "<ul id='characterdisplay'>"

	files.forEach(file => {
		let fileElements = file.split('-')
		list += "<li>" + "<a href='characters/" + file + "'>" + fileElements[0] + ". " + fileElements[1].replace(/_/g, " ") + "</a></li>"
	});

	list += "</ul>"

	let text = '<HTML>';
	text += '<head><link rel="stylesheet" href="../mystyle.css"></head>'
	text += '<body>'

	text += "<div class = centerbox>"
	text += "<div id='printhere' class = toolsection>";
	text += '<h1>LURPS Character List</h1>'
	text += list

	text += "</div>"
	text += "</div>"
	text += "<div class = footer>"
	text += '<a href="default.html">return</a>'
	text += "</div>"
	text += "</body></HTML>"

	return text;
}