// Найди карточку Стёпы в коде и запиши пол Стёпы в переменную 
let gender = document.querySelector('.gender');

// Измени пол Стёпы на мужской используя метод innerHTML
gender.innerHTML = "мальчик";
console.log(gender); 


	let container = document.querySelector('#container');
	let content = container.querySelector('.content');
	let contentItem = content.querySelector('.content__item');

	console.log(contentItem); //Выведет: <li class="content__item"></li>

	let contentItems = content.querySelectorAll('.content__item');

	console.log(contentItems); //Выведет все элементы c классом .content__item


	let elements = document.querySelectorAll('ul > li:last-child');
	console.log(elements.length);

	window.onmousemove = () => {
		const hover = document.querySelectorAll("li:hover");

		for (let elem of hover) {
			elem.style.background = "red";
		}
	};

	const paragraphs = document.getElementsByTagName('p');
	  //const resultElement = document.getElementById('result');//

	const countParagraphs = () => {
		const count = paragraphs.length;
		alert('Число параграфов: ' + count);
	}

	document.getElementById('mybutton').onclick = function() {
		window.location.href = 'https://www.google.com';
	};

	