// 5. Напишіть функцію min (a, b), яка повертає більше чисел a, b.
// min(1,2)//2
// min(23, 3)//23
var a = parseInt(prompt("Number1"));
var b = parseInt(prompt("Number2"));
function min (a, b) {
	return a < b ? b : a;
}
document.write("Большее число:" + min(a,b));
