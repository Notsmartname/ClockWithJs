const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');



function clock() {

    let time = new Date();

    let hours = time.getHours() * 30;
    let minutes = time.getMinutes() * 6;
    let seconds = time.getSeconds() * 6;


    hour.style = `transform:rotateZ(${hours}deg);`;
    min.style = `transform:rotateZ(${minutes}deg);`;
    seconds == 0 ? sec.style = `transform:rotateZ(${seconds}deg);` : sec.style = `transform:rotateZ(${seconds}deg); transition:1s`;

    setTimeout(() => clock(), 1000);

    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();


}

clock();

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function (e) {
        e.preventDefault();

        for (let ix = 0; ix < links.length; ix++) {
            links[ix].classList.remove('active');
            tabs[ix].classList.remove('active');
        }
        tab(this, tabs[i]);
    });
}

function tab(link, content) {
    link.classList.add('active');
    content.classList.add('active');
}

const btn_stopwatch = document.querySelector('.stopwatch__btn'),
    stopwatch__hours = document.querySelector('.stopwatch__hours'),
    stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
    stopwatch__seconds = document.querySelector('.stopwatch__seconds');

let watch_hours = 0;
let watch_minutes = 0;
let watch_seconds = 0;
let interval = null;

function stopwatch() {
    watch_seconds++;

    if (watch_seconds / 60 == 1) {

        watch_seconds = 0;
        watch_minutes++;

        if (watch_minutes / 60 == 1) {
            watch_minutes = 0;
            watch_hours++;
        }

    }

    stopwatch__seconds.innerHTML = watch_seconds < 10 ?  '0' + watch_seconds.toString() : watch_seconds;
    stopwatch__minutes.innerHTML = watch_minutes < 10 ?  '0' + watch_minutes.toString() : watch_minutes;
    stopwatch__hours.innerHTML = watch_hours < 10 ?  '0' + watch_hours : watch_hours;

}


btn_stopwatch.addEventListener("click", () => {

    if (btn_stopwatch.innerHTML === 'start') {

        interval = setInterval(() => stopwatch(), 1000);
        btn_stopwatch.innerHTML = 'stop';
        btn_stopwatch.style.background = 'red'
    } else {
        clearInterval(interval);
        btn_stopwatch.innerHTML = 'start';
        btn_stopwatch.style.background = '#fff';
        stopwatch__seconds.innerHTML = '00';
        stopwatch__minutes.innerHTML = '00';
        stopwatch__hours.innerHTML = '00';
    }

});
