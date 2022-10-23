{
    let menu = document.getElementById('menu');
    function List() {
        menu.classList.toggle('menus');
    }
}
{
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = '2022-11-15'
    initializeClock('countdown', deadline);
}


// var icons = [
//     './img/pic06.png',
//     './img/pic07.png',
//     './img/pic08.png',
//     './img/pic09.png'
// ]
// console.log(icons[1]);


// let img = [
//     './img/pic06.png',
//     './img/pic07.png',
//     './img/pic08.png',
//     './img/pic09.png'
// ]

// image = document.getElementById('image');
// var slot1 = document.getElementById('slot1').className
// var slot2 = document.getElementById('slot2').className
// var slot3 = document.getElementById('slot3').className
// var slot4 = document.getElementById('slot4').className
// var status = document.getElementById('status')
// console.log(slot1);
// console.log(slot2);
// console.log(slot3);
// console.log(slot4);
// console.log(slot1 === slot3);
// function button() {
//     // image.src = img[Math.floor(Math.random() * img.length)];
//     let div = document.querySelectorAll('.icons__slot').forEach((el, i) => el.insertAdjacentHTML('beforeend', '<img src="' + img[Math.floor(Math.random() * img.length)] + '">'));
//     return button
// }


var doing = false;
let status = document.getElementById("status");
var info = true;
let coins = 100;
let minus = 20;
let plus = 100;
let button = document.getElementById('button');

function doSlot() {
    if (doing) { return null; }
    doing = true;
    var numChanges = randomInt(1, 4) * 7
    var numeberSlot1 = numChanges + randomInt(1, 7)
    var numeberSlot2 = numChanges + 2 * 7 + randomInt(1, 7)
    var numeberSlot3 = numChanges + 4 * 7 + randomInt(1, 7)
    var numeberSlot4 = numChanges + 6 * 7 + randomInt(1, 7)

    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var i4 = 0;

    status.innerHTML = "Вращение"
    slot1 = setInterval(spin1, 50);
    slot2 = setInterval(spin2, 50);
    slot3 = setInterval(spin3, 50);
    slot4 = setInterval(spin4, 50);
    function spin1() {
        i1++;
        if (i1 >= numeberSlot1) {
            clearInterval(slot1);
            return null;
        }
        slotTile = document.getElementById("slot1");
        if (slotTile.className == "a4") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
    function spin2() {
        i2++;
        if (i2 >= numeberSlot2) {
            clearInterval(slot2);
            return null;
        }
        slotTile = document.getElementById("slot2");
        if (slotTile.className == "a4") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }

    function spin3() {
        i3++;
        if (i3 >= numeberSlot3) {
            clearInterval(slot3);
            return null;
        }
        slotTile = document.getElementById("slot3");
        if (slotTile.className == "a4") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }

    function spin4() {
        i4++;
        if (i4 >= numeberSlot4) {
            clearInterval(slot4);
            testWin();
            return null;
        }
        slotTile = document.getElementById("slot4");
        if (slotTile.className == "a4") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
}

function testWin() {
    var slot1 = document.getElementById("slot1").className
    var slot2 = document.getElementById("slot2").className
    var slot3 = document.getElementById("slot3").className
    var slot4 = document.getElementById("slot4").className
    if (((slot1 == slot2 && slot2 == slot3 && slot3 == slot4) ||
        (slot1 == slot2 && slot3 == slot4) ||
        (slot1 == slot3 && slot2 == slot4) ||
        (slot2 == slot3 && slot1 == slot4) ||
        (slot1 == slot2 && slot1 == slot4) ||
        (slot1 == slot3 && slot1 == slot4) ||
        (slot2 == slot3 && slot2 == slot4)) && !(slot1 == slot2 && slot2 == slot3 && slot1 == slot4)) {
        status.innerHTML = "Ты выиграл!";
        coins = coins + plus;
        document.getElementById('coins').innerHTML = coins
    } else {
        status.innerHTML = "Ты проиграл!"
        coins = coins - minus;
        document.getElementById('coins').innerHTML = coins;
        if (coins <= 0) {
            status.innerHTML = 'У тебя не осталось очков'
            button.disabled = true;
            button.className = 'a6'
            console.log(button);
        }
    }
    doing = false;
}


function randomInt(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

