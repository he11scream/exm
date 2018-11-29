window.onload = function () { //загрузка стилей, когда DOM загружен
function changeStyle(curColor) {		//смена стиля
	var link = document.createElement("link"); //создаем новый элемент в дереве DOM
	link.rel = "stylesheet";  //тип данных
	link.href = curColor;
	link.type = 'text/css';
	document.head.appendChild(link); //загружаем элемент в DOM
	}

	var curColor = localStorage.getItem("dKey"); //загружаем ключ
if (curColor == null) {   //проверяем наличие ключа, если его нет - устанавливаем
	localStorage.setItem("dKey", "dark_style.css");
	var curColor = localStorage.getItem("dKey"); // присваиваем значение ключа в переменную
	}
	changeStyle(curColor); //вызываем смену стиля, чтобы загрузить его на страницу	
}(); 

// Динамическое переключение стилей

function changeStyle(curColor) {		//получаем на вход значение ключа
	var link = document.createElement("link"); //создаем новый элемент в дереве DOM
	link.rel = "stylesheet";  //тип данных
	link.href = curColor;
	link.type = 'text/css';
	document.head.appendChild(link); //загружаем элемент в DOM
	}
//переключатель стилей
function changeColor () 
{
	var curColor = localStorage.getItem("dKey");
	if (curColor == "dark_style.css")
	{
		localStorage.setItem("dKey", "light_style.css");
		var curColor = localStorage.getItem("dKey");
	}
	else 
	{
		localStorage.setItem("dKey", "dark_style.css");
		var curColor = localStorage.getItem("dKey");
	}
	changeStyle(curColor); 
}




