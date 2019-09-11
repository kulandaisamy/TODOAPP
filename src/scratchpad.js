import "./scratchpad.js";

var fruit = ["apple", "orange", "pineapple"];
console.log("length:", fruit.length);
var first = fruit[0];
var last = fruit[fruit.length - 1];
console.log("accessing index", fruit);
console.log("first index", first);

var newlength = fruit.push("lemon");
console.log("fruit:", fruit);
newlength = fruit.pop();
console.log("remove:", newlength);
var one = fruit.shift();
console.log("first:", one);
var addone = fruit.unshift("stawary");
console.log("length:", addone);
var pos = fruit.indexOf("orange");
console.log("position:", pos);
console.log("removed item", fruit.splice());
var copy = fruit.slice(1, 3);
console.log("copy", copy);
console.log(isArray("data"));

//array.of,array.from,localestring,reduceright
//gettimezoneoffset,settime,tojson
ReactDom.render(fruit, document.getElementById("root"));
