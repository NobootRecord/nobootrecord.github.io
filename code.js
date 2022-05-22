var monthes = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
var weekdays = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
var x = null;
var y = null;

// Обновление системных часов на панели слева
function updateSysClock(){
		x = new Date();
		y = weekdays[x.getDay()] + ", " + x.getDate() + " " + monthes[x.getMonth()] + " " + x.getFullYear() + " года, ";
		if (x.getHours() < 10) y = y + "0";
		y = y + x.getHours() + ":";
		if (x.getMinutes() < 10) y = y + "0";
		y = y + x.getMinutes() + ":";
		if (x.getSeconds() < 10) y = y + "0";
		y = y + x.getSeconds();
		document.getElementById("clockp").innerHTML = y;
};

// Этот код будет запускаться вместе с веб-страницей
setInterval(updateSysClock, 1000); updateSysClock();