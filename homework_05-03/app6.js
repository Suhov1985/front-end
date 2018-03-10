// 6 Напишіть рекурсивну функцію pow (x, n), яка повертає x в ступені n. Інакше кажучи, примножує x на себе n разів і повертає результат.
// pow(2,2); 2*2 = 4;
// pow(2, 5); 2*2*2*2*2 = 32;

var a = parseInt(prompt("Number1"));
var b = parseInt(prompt("Number2"));

function pow (x, n) {
	if(n != 1){
		return x * pow(x, n-1);
	}
	else{
		return x;
	}
}

document.write("Результат:" + pow(a, b));