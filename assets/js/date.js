var ut = document.getElementById("datenext")
var eventblock = document.getElementById("eventblock")
var eventtitle = document.getElementById("eventtitle")
var eventdesc = document.getElementById("eventdesc")
var eventdate = document.getElementById("eventdate")

var data = new Date();
var month=new Array(12);
  month[0]="Января";
  month[1]="Февраля";
  month[2]="Марта";
  month[3]="Апреля";
  month[4]="Мая";
  month[5]="Июня";
  month[6]="Июля";
  month[7]="Августа";
  month[8]="Сентября";
  month[9]="Октября";
  month[11]="Декабря";
var weekday=new Array(7);
  weekday[0]="Воскресенье";
  weekday[1]="Понедельник";
  weekday[2]="Вторник";
  weekday[3]="Среда";
  weekday[4]="Четверг";
  weekday[5]="Пятница";
  weekday[6]="Суббота";
  ut.innerHTML =  (data.toLocaleString()); // 28.09.2019, 02:50:33
  ut.innerHTML = (data.toString()); // Дата: Sat Sep 28 2019 02:50:38 GMT+0300 (Москва, стандартное время)
  ut.innerHTML = (data.getDate()+ ' ' + month[data.getMonth()]+ ' ' +data.getFullYear()+' года. '+weekday[data.getDay()]+'. Время: '+data.toLocaleTimeString()); // 28 Сентября 2019 года. Суббота. Время: 02:50:45
  ut.innerHTML = ('Нет событий на ' +data.getDate()+ ' ' + month[data.getMonth()])