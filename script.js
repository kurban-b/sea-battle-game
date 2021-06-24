const map = document.querySelector('.main');
const arr = map.children;
const arr2 = [];
const result = document.querySelector('#result');
const sum = document.getElementById('vistril');
const modal = document.getElementById('mod');
const download = document.getElementById('download-id');
const levels = document.getElementById('lvl-group').children;
const arrLvl = [];
const restart = document.getElementById('restart')

document.addEventListener('DOMContentLoaded', downLo)


for (let i = 0; i < levels.length; i++) {
    arrLvl.push(levels[i])
}
for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i])
}
arrLvl.forEach(function (i){
    i.addEventListener('click', start)
})
arr2.forEach(function (i){
    i.addEventListener('click', add);
    i.addEventListener('click', finish);
    i.addEventListener('click', sumV);
})

restart.addEventListener('click', restartGame)

function restartGame () {
    location.reload()
}

function start() {
    if (this.id == 'lvl-1') {
        sum.innerHTML = 25
    } else if (this.id == 'lvl-2') {
        sum.innerHTML = 20
    } else {
        sum.innerHTML = 15
    }
    let modLvl = document.getElementsByClassName('mod-lvl')[0];
    modLvl.style.display = 'none';

}


let ship = [arr2[0], arr2[1], arr2[2], arr2[15], arr2[16], arr2[17], arr2[35], arr2[36], arr2[37]]

function add () {

    if (this == arr2[0] || this == arr2[1] || this == arr2[2] || this == arr2[40] ||
        this == arr2[16] || this == arr2[17] || this == arr2[35] || this == arr2[36] || this == arr2[37]) {
        this.classList.add('ship')
        result.innerHTML = 'Попал!'
        let audio = new Audio();
        audio.src = 'audio/pushka.mp3';
        audio.autoplay = true;

    } else if ( this.className != 'ship') {
        let audio2 = new Audio();
        audio2.src = 'audio/water.mp3';
        audio2.autoplay = true;
        this.innerHTML = 'X'
        result.innerHTML = 'Мимо!'
    }
}

function finish(){
    if (sum.innerHTML == 1) {
        modal.firstElementChild.innerHTML = 'Вы проиграли!!!';
        modal.style.display = 'block';
        let lose = new Audio('audio/lose.mp3');
        lose.autoplay = true;
        modal.style.backgroundImage = 'url(img/modal2.jpg)';
    }
    if (arr2[0].className == 'block ship' && arr2[1].className == 'block ship' && arr2[2].className == 'block ship' &&
        arr2[40].className == 'block ship' && arr2[16].className == 'block ship' && arr2[17].className == 'block ship' &&
        arr2[35].className == 'block ship' && arr2[36].className == 'block ship' && arr2[37].className == 'block ship') {
        result.innerHTML = 'Вы выиграли!!!';
        let win = new Audio('audio/win.mp3');
        win.autoplay = true;
        modal.firstElementChild.innerHTML = 'Победа';
        modal.style.display = 'block';
    };

}
function sumV() {
    sum.innerHTML = sum.innerHTML - 1;
}

function downLo () {
    setTimeout(function () {
        download.style.display = 'none';
    }, 1500)
}





