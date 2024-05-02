
let divs = document.querySelectorAll('div');
let h2 = document.querySelector('h2');
let play = document.querySelector('#play');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

let score = 0;
let winPoint = 0;

function interval() {
    let interval = setInterval(() => {
        let rand = Math.floor(Math.random(0) * divs.length);
        timeOut(rand)
        stop.addEventListener('click', () => {
            clearInterval(interval);
            second = 60;
        });
        reset.addEventListener('click', () => {
            clearInterval(interval);
            second = 60;
        });
        if (second === 1) {
            clearInterval(interval);
        }
    }, 2000);
}

play.addEventListener('click', () => {
    interval();
    timerPlay();
    second = 60;
})
reset.addEventListener('click', () => {
    interval();
    timerPlay();
    second = 60;
});



function timeOut(params) {
    setTimeout(() => {
      console.log(params);
      let img = document.createElement('img');
      img.src = 'assets/tom.png';
      img.alt = 'a Dumbest';
      divs[params].appendChild(img);
      img.addEventListener('click', () => {
        if (winPoint === 0) {
            score++;
            winPoint++;
            img.style.animationName = 'tomDeath'
            h2.innerText = `Score : ${score}`;
        }
        
      })
      
      setTimeout(() => {
        setTimeout(() => {
            img.remove();
            winPoint = 0;
          }, 1000);
        img.style.animationName = 'tomOut';
      }, 1000);
    }, 500);
}

let timer = document.getElementById('timer');
let second = 60;
function timerPlay() {
    let time = setInterval(() => {
        second--;
        timer.innerText = `Timer : ${second} Secondes`;
        if (second < 10) {
            timer.innerText = `Timer : 0${second} Secondes`;
        }
        if (second === 0) {
            clearInterval(interval);
            timer.innerText = `Timer : Temps écoulé`;
            clearInterval(time);
        }
    }, 1000);
    
}