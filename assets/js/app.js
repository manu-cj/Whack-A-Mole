
let divs = document.querySelectorAll('div');
let h2 = document.querySelector('h2');
let play = document.querySelector('#play');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

let timeOne = false;
let on = false;
let sound;
let score = 0;
let winPoint = 0;

function interval() {
    on = true;
    let interval = setInterval(() => {
        let rand = Math.floor(Math.random(0) * divs.length);
        timeOut(rand)
        stop.addEventListener('click', () => {
            clearInterval(interval);
            second = 60;
            score = 0;
            one = false;
        });
        reset.addEventListener('click', () => {
            clearInterval(interval);
            second = 60;
            score = 0;
            on = false;
        });
        if (second === 1) {
            clearInterval(interval);
        }
    }, 1000);
}


    play.addEventListener('click', () => {
        if(on === false) {
            interval();
        }
        if (timeOne === false) {
            timerPlay();
        }
        second = 60;
        score = 0;
    })







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
            if (sound) {
                sound.pause(); // Arrêter la lecture si le son est déjà en cours
                sound.currentTime = 0; // Rembobiner au début pour pouvoir rejouer
            }
            sound = new Audio('assets/ouille.mp3');
            sound.play(); // Jouer le son
        }
        
      })
      
      setTimeout(() => {
        setTimeout(() => {
            img.remove();
            winPoint = 0;
          }, 1000);
        img.style.animationName = 'tomOut';
      }, 500);
    }, 500);
}

let timer = document.getElementById('timer');
let second = 60;
function timerPlay() {
    timeOne = true;
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
            timeOne = false;
            on = false;
        }

        stop.addEventListener('click', () => {
            clearInterval(time);
            second = 60;
            timer.innerText = `Timer : 60 Secondes`;
        })
        reset.addEventListener('click', () => {
            clearInterval(time);
            second = 60;
            timer.innerText = `Timer : 60 Secondes`;
        })
    }, 1000);
    
}