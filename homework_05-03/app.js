// 1 Умовні конструкції:
// Написати код, який буде:
// Запитати в користувача його вік:
// Якщо вік більший 7 і менший 17
// Запитати в користувача ім’я
// Якщо ввів:
// Вивести “Доброго дня, <name>”
// Інакше вивести “До побачення”
// Інакше вивести “Ви народились не в 2000х”
var age = prompt("Укажите ваш возраст:");

if (age > 7 && age < 17){
	var name = prompt("Укажите ваше имя:");
	var hello = "Доброго дня, " + name;
	document.write(!name ? "До побачення" : hello);
}
else{
	document.write("Ви народились не в 2000х");
}
