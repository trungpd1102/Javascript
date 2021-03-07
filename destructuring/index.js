// destructuring

const ducTrung = {
	name: "Trung",
	age: 25,
	address: "haiduong"
};

function display({name, age, address}) {

	console.log(name);
	console.log(age);
	console.log(address);
}

// let vuNgoc = {};
// Object.assign(vuNgoc, ducTrung, {name: "Ngoc"});
// // vuNgoc.name = "Ngoc"

const vuNgoc = {
	...ducTrung,
	name: "Ngoc"
}

// vuNgoc.name = "Ngoc"

display(vuNgoc);
display(ducTrung);