// Объявление основных переменных.
const passwordLength = +prompt('Введите предполагаемую длину пароля:', '');
const element = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Объявление счетчика и конечного результата цикла.
let i = 0;
let password = [];

// Выбор случайных значений.
while(i < passwordLength + 1) {
	let randomElementIndex = Math.floor(Math.random()*element.length);
	password.push(element[randomElementIndex]);
	i++;
};

// Вывод конечного результата.
alert(`Ваш пароль, состоящий из ${passwordLength} значений имеет вид: ${password.join('')}`);
