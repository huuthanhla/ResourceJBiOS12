/*jslint
  node: true,
  sloppy: true,
  browser: true,
  todo: true
*/

/*global
  document
*/

/*
   _,.----.              _,.---._      _,.----.  ,--.-.,-.            ,--.-,  ,-,--.
 .' .' -   \   _.-.    ,-.' , -  `.  .' .' -   \/==/- |\  \          |==' -|,-.'-  _\
/==/  ,  ,-' .-,.'|   /==/_,  ,  - \/==/  ,  ,-'|==|_ `/_ /          |==|- /==/_ ,_.'
|==|-   |  .|==|, |  |==|   .=.     |==|-   |  .|==| ,   /         __|==|, \==\  \
|==|_   `-' \==|- |  |==|_ : ;=:  - |==|_   `-' \==|-  .|       ,--.-'\=|- |\==\ -\
|==|   _  , |==|, |  |==| , '='     |==|   _  , |==| _ , \      |==|- |=/ ,|_\==\ ,\
\==\.       /==|- `-._\==\ -    ,_ /\==\.       /==/  '\  | .=. |==|. /=| -/==/\/ _ |
 `-.`.___.-'/==/ - , ,/'.='. -   .'  `-.`.___.-'\==\ /\=\.':=; :\==\, `-' /\==\ - , /
            `--`-----'   `--`--''                `--`       `=`  `--`----'  `--`---'
** Creator: JunesiPhone
** Website: http://junesiphone.com/libraries
** Javascript clocks the easy way.
** Usage clock({
          twentyfour : false,
          padzero : false,
          refresh : 5000,
          success: function(clock){
            $$('#time').innerHTML = clock.hour() + ':' + clock.minute();
          }
        });
*/


window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
}());

function clock(options) {
    'use strict';
    var getTimes = function () {
        var d = new Date(),
            funcs = {
                hour: function () {
                    var hour = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
                    hour = (options.padzero === true) ? (hour < 10 ? "0" + hour : "" + hour) : hour;
                    return hour;
                },
                rawhour: function () {
                    return d.getHours();
                },
                minute: function () {
                    return (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
                },
                rawminute: function () {
                    return d.getMinutes();
                },
                ampmstrict: function () {
                    var ampm = (d.getHours() > 11) ? "pm" : "am";
                    return ampm;
                },
                am: function () {
                    if (options.twentyfour === true) {
                        return ' ';
                    }
                    return (d.getHours() > 11) ? "pm" : "am";
                },
                date: function () {
                    return d.getDate();
                },
                day: function () {
                    return d.getDay();
                },
                month: function () {
                    return d.getMonth();
                },
                year: function () {
                    return d.getFullYear();
                },
                hourtext: function () {
                    var hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
                    return hourtxt[this.rawhour()];
                },
                minuteonetext: function () {
                    var minuteone = ["o' clock", "o' one", "o' two", "o' three", "o' four", "o' five", "o' six", "o' seven", "o' eight", "o' nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
                    if (minuteone[this.rawminute()] !== undefined) {
                        return minuteone[this.rawminute()];
                    }
                    return "";
                },
                minutetwotext: function () {
                    var minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ""];
                    if (minutetwo[this.rawminute()] !== undefined) {
                        return minutetwo[this.rawminute()];
                    }
                    return "";
                },
                daytext: function () {
                    var textdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return textdays[this.day()];
                },
                sdaytext: function () {
                    var stextdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    return stextdays[this.day()];
                },
                sdaytextmanual: function (day) {
                    var stextdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    return stextdays[day];
                },
                monthtext: function () {
                    var textmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    return textmonth[this.month()];
                },
                smonthtext: function () {
                    var textmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    return textmonth[this.month()];
                },
                datetext: function () {
                    var textdate = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eightheenth", "Nineteenth", "Twentyith", "TwentyFirst", "TwentySecond", "TwentyThird", 'TwentyFourth', "TwentyFifth", "TwentySixth", "TwentySeventh", "TwentyEight", "TwentyNinth", "Thirtyith", "ThirtyFirst"];
                    return textdate[this.date() - 1];
                },
                nth: function (d) {
                    if (d > 3 && d < 21) {
                        return 'th';
                    }
                    switch (d % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th";
                    }
                },
                dateplus: function () {
                    return this.date() + this.nth(Number(this.date()));
                }
            };

        options.success(funcs);
        setTimeout(function () {
            window.requestAnimFrame(getTimes);
        }, options.refresh);
    };
    getTimes();
}

var current = (window.navigator.language.length >= 2) ? window.navigator.language.split('-')[0] : 'en',
    $$ = function (el) {
        return document.getElementById(el);
    },
    translate = {
        en: {
			feels: ["Feelslike"],
            weekday: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
			weekarray: ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue"],
            sday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            month: ["Tháng 01", "Tháng 02", "Tháng 03", "Tháng 04", "Tháng 50", "Tháng 06", "Tháng 07", "Tháng 08", "Tháng 09", "Tháng 10", "Tháng 11", "Tháng 12"],
            smonth: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            condition: ["Lốc xoáy", "Bão nhiệt đới", "Siêu bão", "Bão tố có sấm sét", "Bão tố có sấm sét", "Tuyết", "Mưa tuyết", "Mưa tuyết", "Mưa phùn lạnh giá", "Mưa phùn", "Mưa đá", "Mưa rào", "Mưa rào", "Mưa dông", "Tuyết", "Tuyết", "Tuyết", "Mưa đá", "Mưa tuyết", "Bụi", "Sương mù", "Sương mờ", "Âm u", "Gió giật mạnh", "Có gió", "Lạnh", "Nhiều mây", "Nhiều mây", "Nhiều mây", "Nhiều mây", "Nhiều mây", "Trời quang đãng", "Có nắng", "Trời đẹp", "Trời đẹp", "Mưa tuyết", "Nóng", "Bão tố có sấm sét", "Bão tố có sấm sét", "Bão tố có sấm sét", "Mưa rào", "Tuyết rơi nhiều", "Tuyết rơi nhẹ", "Tuyết rơi nhiều", "Có mây rải rác", "Bão tố có sấm sét", "Tuyết", "Bão tố có sấm sét", "blank"],
			charging: ["Not Charging" , "Charging"]
        },
        nl: {
			feels: ["Feelslike"],
            weekday: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
			weekarray: ["Do", "Vr", "Za", "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo", "Ma", "Di"],
            sday: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            month: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
            smonth: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            condition: ["Tornado", "Tropische Storm", "Orkaan", "Onweer", "Onweer", "Sneeuw", "Natte sneeuw", "Natte sneeuw", "Hagel", "Miezer", "Hagel", "Buien", "Buien", "Natte sneeuw", "Sneeuw", "Sneeuw", "Sneeuw", "Hagel", "Natte sneeuw", "Stof", "Mist", "Nevel", "Dampig", "Blustery", "Winderig", "Koud", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Bewolkt", "Helder", "Zon", "Normaal", "Normaal", "Natte sneeuw", "Heet", "Onweer", "Onweer", "Onweer", "Buien", "Zware sneeuw", "Lichte sneeuw", "Zware sneeuw", "Licht bewolkt", "Onweer", "Sneeuw", "Onweer", "blank"],
			charging: ["Niet opladen" , "Opladen"]
        },
        ru: {
			feels: ["Feelslike"],
            weekday: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
			weekarray: ["Чет", "Пят", "Суб", "Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб", "Вос", "Пон", "Вто"],
            sday: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
            month: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            smonth: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            condition: ["Торнадо", "Тропический шторм", "Ураган", "Гроза", "Гроза", "Снег", "Мокрый снег", "Мокрый снег", "Изморозь", "Морось", "Ледяной дождь", "Ливень", "Ливень", "Сильные порывы ветра", "Снег", "Снег", "Снег", "Град", "Мокрый снег", "Пыль", "Туман", "Легкий туман", "Туманно", "Порывисто", "Ветренно", "Холодно", "Облачно", "Облачно", "Облачно", "Облачно", "Облачно", "Ясно", "Солнечно", "Ясно", "Ясно", "Мокрый снег", "Жарко", "Гроза", "Гроза", "Гроза", "Ливень", "Снегопад", "Небольшой снег", "Снегопад", "Переменная облачность", "Гроза", "Снег", "Гроза", "пусто"],
			charging: ["Не заряжается" , "Зарядка"]
        },
        cz: {
			feels: ["Feelslike"],
            weekday: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
			weekarray: ["Čt", "Pá", "So", "Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne", "Po", "Út"],
            sday: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            month: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            smonth: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čen", "Čec", "Srp", "Zář", "Říj", "Lis", "Pro"],
            condition: ["Tornádo", "Tropická bouře", "Hurikán", "Bouře", "Bouře", "Sněžení", "Déšť a sníh", "Déšť a sníh", "Mrznoucí mrholení", "Mrholení", "Mrznoucí déšť", "Přeháňky", "Přeháňky", "Poryvy větru", "Sněžení", "Sněžení", "Sněžení", "Kroupy", "Déšť a sníh", "Prach", "Mlhy", "Řídké mlhy", "Kouř", "Větrno s bouřkami", "Větrno", "Chladno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Oblačno", "Jasno", "Slunečno", "Krásně", "Krásně", "Déšť a sníh", "Horko", "Bouře", "Bouře", "Bouře", "Přeháňky", "Husté sněžení", "Lehké sněžení", "Husté sněžení", "Polojasno", "Bouře", "Sněžení", "Bouře", "prázdné"],
			charging: ["Nenabíjí se" , "Nabíjení"]
        },
        it: {
			feels: ["Feelslike"],
            weekday: ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'],
			weekarray: ["Gio", "Ven", "Sat", "Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat", "Sun", "Mon", "Mar"],
            sday: ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"],
            month: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            smonth: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            condition: ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"],
			charging: ["Non caricando" , "ricarica"]
        },
        sp: {
			feels: ["Feelslike"],
            weekday: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
			weekarray: ["Jue", "Vie", "Sat", "Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat", "Sol", "Mon", "Mar"],
            sday: ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"],
            month: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            smonth: ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"],
            condition: ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"],
			charging: ["No cobrar" , "Cargando"]
        },
        de: {
			feels: ["Gefühlte"],
            weekday: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
			weekarray: ["Do.", "Fr.", "Sa.", "So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So.", "Mo.", "Di."],
            sday: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            month: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            smonth: ["Jan", "Feb", "Mä", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "],
            condition: ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "Schneegestöber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "Stürmisch", "Windig", "Kalt", "Bewölkt", "Meist Bewölkt", "Meist Bewölkt", "Bewölkt", "Bewölkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Örtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "Bewölkt", "Gewitter", "Scheeschauer", "Örtliche Gewitterschauer", "Nicht Verfügbar"],
			charging: ["Abgesteckt" , "Laden"]
        },
        fr: {
			feels: ["Feelslike"],
            weekday: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
			weekarray: ["Jeu", "Ven", "Sam", "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim", "Lun", "Mar"],
            sday: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            month: ["Janvie", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            smonth: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            condition: ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃªle", "Neige Fondue", "PoussiÃ©reux", "Brouillard", "Brume", "Brumeux", "TempÃªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃ¨s Nuageux", "TrÃ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃªles", "Temps Chaud", "Orages IsolÃ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃ©s", "Non Disponible"],
			charging: ["Pas de charge" , "Charge"]
        },
        zh: {
			feels: ["Feelslike"],
            weekday: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
			weekarray: ['周四', '周五', '周六', '周日', '周一', '周二', '周三', '周四', '周五', '周六', '周日', '周一', '周二'],
            sday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            smonth: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
            condition: ["龙卷风", "热带风暴", "飓风", "雷暴", "雷暴", "雪", "雨雪", "雨雪", "冻毛毛雨", "细雨", "冻雨", "淋浴", "淋浴", "飘雪", "雪", "雪", "雪", "Hail", "雨雪", "尘", "牙齿", "阴霾", "烟", "风起云涌", "有风", "冷", "多云", "多云", "多云", "多云", "多云", "明确", "晴朗", "公平", "公平", "雨雪", "Hot", "雷暴", "雷暴", "雷暴", "淋浴", "大雪", "小雪", "大雪", "半 多云", "雷暴", "雪", "雷暴", "空白"],
			charging: ["不收費" , "充电"]
        },
        he: {
			feels: ["Feelslike"],
            weekday: ["שבת", "שישי", "חמיש", "רביעי", "שלישי", "שני", "ראשון"],
			weekarray: ["ה", "ו", "ש", "ש’", "ו’", "ה", "ד’", "ג’", "ב’", "א’", "א", "ב", "ג"],
            sday: ["ז’", "ו’", "ה", "ד’", "ג’", "ב’", "א’"],
            month: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            smonth: ["ינו", "פבר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוג", "ספט", "אוקט", "נוב", "דצמ"],
            condition: ["טורנדו", "סופה טרופית", "הוריקן", "סופת-רעמים", "סופת-רעמים", "שלג", "ברד קל", "ברד קל", "ברד", "טפטוף", "טפטוף", "מקלחת", "מקלחת", "משב רוח", "שלג", "שלג", "שלג", "ברד", "ברד קל", "Dust", "ערפל", "אובך", "אובך", "סוער", "סוער", "קר", "מעונן", "מעונן", "מעונן", "מעונן", "מעונן", "בהיר", "שמשי", "נאה", "נאה", "ברד קל", "חם", "סופת-רעמים", "סופת-רעמים", "סופת-רעמים", "מקלחת", "שלג כבד", "שלג קל", "שלג כבד", "מעונן חלקית", "סופת-רעמים", "שלג", "סופת-רעמים", "ריק"],
			charging: ["לא טוען" , "טְעִינָה"]
        },
        pl: {
			feels: ["Feelslike"],
            weekday: ["Niedziela", "Poniedzialek", "Wtorek", "Sroda", "Czwartek", "Piatek", "Sobota"],
			weekarray: ["Czw", "Pia", "Sob", "Nie", "Pon", "Wto", "Sro", "Czw", "Pia", "Sob", "Nie", "Pon", "Wto"],
            sday: ["Nie", "Pon", "Wto", "Sro", "Czw", "Pia", "Sob"],
            month: ["Styczen", "Luty", "Marzec", "Kwiecien", "Maj", "Czerwiec", "Lipiec", "Sierpien", "Wrzesien", "Pazdziernik", "Listopad", "Grudzien"],
            smonth: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paz", "Lis", "Gru"],
            condition: ["Tornado", "Tropikalna Burza", "Huragan", "Burza Z Piorunami", "Burza Z Piorunami", "Snieg", "Deszcz Ze Sniegiem", "Deszcz Ze Sniegiem", "Zamarzajaca Mzawka", "Mzawka", "Zamarzajacy Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Przelotny Deszcz", "Snieg", "Snieg", "Snieg", "Grad", "Deszcz Ze Sniegiem", "Pyl", "Mgla", "Mgla", "Zadymiony", "Wietrznie", "Wietrznie", "Zimno", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Pochmurnie", "Czyste Niebo", "Slonecznie", "Slonecznie", "Slonecznie", "Deszcz Ze Sniegiem", "Cieplo", "Burze z Piorunami", "Burze z Piorunami", "Burze z Piorunami", "Przelotny Deszcz", "Mocny Snieg", "Lekki Snieg", "Mocny Snieg", "Czesciowo Pochmurnie", "Burza Z Piorunami", "Snieg", "Burza Z Piorunami", "puste"],
			charging: ["Nie ładuje się" , "Ładowanie"]
        },
        pt: {
			feels: ["Feelslike"],
            weekday: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
			weekarray: ["Sex", "Sab", "Dom", "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom", "Seg", "Ter"],
            sday: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
            month: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            smonth: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            condition: ["Tornado", "Tempestade Tropical", "Furacão", "Trovoada", "Trovoada", "Neve", "Chuva com Neve", "Chuva com Neve", "Geada", "Garoa", "Chuva Gélida", "Pancadas de Chuva", "Pancadas de Chuva", "Rajadas", "Neve", "Neve", "Neve", "Granizo", "Chuva Gélida", "Poeira", "Névoa", "Névoa", "Nebuloso", "Vendaval", "Ventando", "Frio", "Nublado", "Nublado", "Nublado", "Nublado", "Nublado", "Céu Limpo", "Ensolarado", "Bom Tempo", "Bom Tempo", "Chuva Gélida", "Quente", "Trovoadas", "Trovoadas", "Trovoadas", "Pancadas de Chuva", "Nevasca Pesada", "Nevasca Leve", "Nevasca Pesada", "Parcialmente Nublado", "Trovoada", "Neve", "Trovoada", "em branco"],
			charging: ["Não está carregando" , "Carregamento"]
        }
    };
if (!translate[current]) {
    current = 'en';
}
