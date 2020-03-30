document.getElementById('submit').addEventListener('click', submithandler)

let provinceVal = '';
let ppa = 0;
let fc = 0;
let fd = 0;
let gp = 0;
let randInt = 0;

function submithandler() {
  provinceVal = document.getElementById('province').value;

  if (provinceVal == 'BRITISH COLUMBIA') {
    randInt = Math.random()
    if (randInt <= 0.7) {
      ppa++;
      document.getElementById('playagain').value = ppa;
    } else if (randInt <= 0.8) {
      fc++;
      document.getElementById('freecoffee').value = fc;
    } else if (randInt <= 0.9) {
      fd++;
      document.getElementById('donut').value = fd;
    } else {
      gp++;
      document.getElementById('grandprize').value = gp;
    }
  } else if (provinceVal == 'ALBERTA') {
    randInt = Math.random()
    if (randInt <= 0.15) {
      ppa++;
      document.getElementById('playagain').value = ppa;
    } else if (randInt <= 0.55) {
      fc++;
      document.getElementById('freecoffee').value = fc;
    } else if (randInt <= 0.95) {
      fd++;
      document.getElementById('donut').value = fd;
    } else {
      gp++;
      document.getElementById('grandprize').value = gp;
    }
  } else if (provinceVal == 'SASKATCHEWAN') {
    randInt = Math.random()
    if (randInt <= 0.7) {
      ppa++;
      document.getElementById('playagain').value = ppa;
    } else if (randInt <= 0.71) {
      fc++;
      document.getElementById('freecoffee').value = fc;
    } else if (randInt <= 0.72) {
      fd++;
      document.getElementById('donut').value = fd;
    } else {
      gp++;
      document.getElementById('grandprize').value = gp;
    }
  }

}

document.getElementById('s5t').addEventListener('click', s5thandler)

function s5thandler() {
  for (i=0; i<5; i++) {
    submithandler()
  }
}

document.getElementById('suagpiw').addEventListener('click', suagpiwhandler)

function suagpiwhandler() {
  while (gp < 1) {
    submithandler()
  }
}

document.getElementById('su500d').addEventListener('click', su500dhandler)

function su500dhandler() {
  while (fd < 500) {
    submithandler()
  }
}
