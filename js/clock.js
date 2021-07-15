const clock = document.querySelector('#clock');

function getDate() {
    let date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `현재시각 : ${hours}:${minutes}:${second} 입니다.`
}


getDate()
setInterval(getDate, 1000) /* 반복해서 실행 */
//setTimeout(sayHello, 4000) /* 시간 후 한번만 실행 */