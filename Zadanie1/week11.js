/* Найди карточку Стёпы в коде и запиши пол Стёпы в переменную 
let gender = container.querySelector('.gender');

// Измени пол Стёпы на мужской используя метод innerHTML
gender.innerHTML = "мальчик";
console.log(gender);  */


	let container = document.querySelector('#container');
	let content = container.querySelector('.content');
	let contentItem = content.querySelector('.content__item');

	console.log(contentItem); //Выведет: <li class="content__item"></li>

	let contentItems = content.querySelectorAll('.content__item');

	console.log(contentItems); //Выведет все элементы c классом .content__item
