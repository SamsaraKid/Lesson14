//Дни недели
// let otvet = Number(prompt('Какой день недели (номер)?'))
// switch (otvet) {
//     case 1: alert('Понедельник'); break;
//     case 2: alert('Вторник'); break;
//     case 3: alert('Среда'); break;
//     case 4: alert('Четверг'); break;
//     case 5: alert('Пятница'); break;
//     case 6: alert('Суббота'); break;
//     case 7: alert('Воскресенье'); break;
//     default: alert('Нет такого'); break;
// }

//Чат-бот
// let ask = prompt('Напишите запрос')
// switch (ask) {
//     case 'Привет': alert('Здравствуйте'); break;
//     case 'Пока': alert('До свидания'); break;
//     case 'Погода': alert('Солнечно'); break;
//     case 'Анекдот': alert(':-Р'); break;
//     case 'Игра': alert('Пират'); break;
//     default: alert('Скиньте донат'); break;
// }



function f1() {
    if ($('#dino').classList !== 'jump') {
        $('#dino').addClass('jump')
    }
    setTimeout(function (){$('#dino').removeClass('jump')},700)
}

function f2() {
    let kaktusleft = $('#kaktus').css('left')
    let dinotop = $('#dino').css('top')
    kaktusleft = Number(kaktusleft.slice(0,-2))
    dinotop = Number(dinotop.slice(0,-2))
    console.log(kaktusleft + '--' + dinotop)
    if ((kaktusleft>=0) && (kaktusleft<=50) && (dinotop>=300) && (dinotop<=350)) {
        alert('Fail')
        location.reload()
    }
}

$(document).keydown(f1)
setInterval(f2,10)