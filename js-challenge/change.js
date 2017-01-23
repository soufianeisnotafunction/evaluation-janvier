var vehicules = ["bateau", "avion", "voiture"];
var tab = [];

vehicules.map(word => tab.push({
    title: word,
    img: word + ".jpeg"
}));
console.log(tab);

vehicules = vehicules.map(a => a + ".jpeg");
console.log(vehicules);

var aDesRoues = vehicules.slice(1);
console.log(aDesRoues);

var screamName = aDesRoues.map(a => a.substring(0, a.length - 5).toUpperCase());
console.log(screamName); 
