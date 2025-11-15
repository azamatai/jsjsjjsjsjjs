var a = 15;
console.log(typeof a);

var b = "10";
console.log(typeof b);

var c = null;
console.log(c);

var e = Number("20");
var d = "go";
console.log(e * d);

var f;
console.log(f);

var age = 20;
console.log(age == 25);

var age = 30;
console.log(age !== 40);

var mani = prompt("введите сумму покупки");

if (isNaN(mani)) {
  alert("введите число");
} else {
  mani = parseFloat(mani);
  var action = 0;

  if (mani >= 100 && mani <= 500) action = 0.01;
  else if (mani > 500 && mani <= 1000) action = 0.1;
  else if (mani > 1000) action = 0.15;

  var result = mani - mani * action;

  console.log("cкидка " + action * 100 + "%");
  console.log("итогавая сумма " + result.toFixed(2));
}
