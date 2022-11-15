let second = document.getElementById("second");
var minute = document.getElementById("minute");
var hour = document.getElementById("hour");
var watch,
    variable = 0,
    s = 0,
    h = 0,
    m = 0;

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
pause.addEventListener("click", () => {
    pause.innerHTML == "pause"
        ? (pause.innerHTML = "continue")
        : (pause.innerHTML = "pause");
});
let stopwatchrunning = () => {
    start.style.visibility = "hidden";
    variable = 0;
    watch = setInterval(() => {
        if (pause.innerHTML == "pause" && variable == 0) {
            second.innerHTML = s;
            s++;
            if (s == 60) {
                m++;
                s = 0;
            }
            if (m == 60) {
                h++;
                m = 0;
            }
            second.innerHTML = `<h1>${s}</h1>`;
            minute.innerHTML = `<h1>${m}</h1>`;
            hour.innerHTML = `<h1>${h}</h1>`;
        }
    }, 1000);
};
start.addEventListener("click", () => {
    stopwatchrunning();
});
reset.addEventListener("click", () => {
    start.style.visibility = "visible";
    s = 0;
    m = 0;
    h = 0;
    variable = 1;
    second.innerHTML = `<h1>${s}</h1>`;
    minute.innerHTML = `<h1>${m}</h1>`;
    hour.innerHTML = `<h1>${h}</h1>`;
    clearInterval(watch);
});
