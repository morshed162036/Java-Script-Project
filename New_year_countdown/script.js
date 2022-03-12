let year = new Date();
year = year.getFullYear();
console.log(year);
const _days = document.querySelector("#days");
const _hours = document.getElementById("hours");
const _min = document.getElementById("min");
const _second = document.getElementById("seconds");
    //day.innerHTML = days;
function countdown(){
    const currentDate = new Date();
    const newYearDate = new Date(year, 0, 1);// you can change count down date as your need
    console.log(newYearDate);

    totalSeconds = Math.floor((newYearDate-currentDate)/1000);
    if(totalSeconds<=0){
        year++;
        totalSeconds = 0;
    }
    //console.log(totalSeconds);
    const days = Math.floor(totalSeconds/(60*60*24));
   _days.innerHTML = formateTime(days);

    const hours =  Math.floor(totalSeconds/(60*60))%24;
    //console.log(hours);
    _hours.innerHTML = formateTime(hours);
    const min =  Math.floor(totalSeconds/60)%60;
    //console.log(min);
    _min.innerHTML = formateTime(min);
    const second = totalSeconds%60;
    //console.log(second);
    _second.innerHTML = formateTime(second);
    //console.log(totalSeconds.getDate(totalSeconds));

}
function formateTime(time){
    return time<10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);
