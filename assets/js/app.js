
let divs = document.querySelectorAll('div');
let h2 = document.querySelector('h2');

let score = 0;
let winPoint = 0;

let interval = setInterval(() => {
    let rand = Math.floor(Math.random(0) * divs.length);
    timeOut(rand)
}, 2000);



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

