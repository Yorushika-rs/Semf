const semaforos = [{
  green: document.getElementById("green1"),
  yellow: document.getElementById("yellow1"),
  red: document.getElementById("red1")
}, {
  green: document.getElementById("green2"),
  yellow: document.getElementById("yellow2"),
  red: document.getElementById("red2")
}, {
  color: document.getElementById("color")
}
]
const buttons = [
  document.getElementById("button1"),
  document.getElementById("button2")
]
const luces = {
  go: function go(semaforo) {
    semaforo.green.style.opacity = "1";
  },
  wait: function wait(semaforo) {
    semaforo.yellow.style.opacity = "1";
  },
  stop: function stop(semaforo) {
    semaforo.red.style.opacity = "1";
  }
}

function colorLuz(semaforo) {
  if (semaforo.color.style.backgroundColor === "greenyellow") {
    semaforo.color.style.backgroundColor = "red";
  } else semaforo.color.style.backgroundColor = "greenyellow"
  semaforo.color.style.opacity = "1";
}

function noColor(semaforo) {
  for (let key in semaforo) {
    semaforo[key].style.opacity = "0.4";
  }
}

async function changeLight(semaforo1, semaforo2) {
  console.log("cambiando...")
  await new Promise(resolve => {
    setTimeout(() => {
      noColor(semaforo1)
      luces.wait(semaforo1)
      resolve()
    }, 3000);
  });
  setTimeout(() => {
    noColor(semaforo1)
    luces.stop(semaforo1)
    noColor(semaforo2)
    luces.go(semaforo2)
    colorLuz(semaforos[2])
    console.log("cambiado!!")
  }, 3000)
}

luces.go(semaforos[0]);
luces.stop(semaforos[1]);

buttons[0].addEventListener("click", function() {
  if (semaforos[0].red.style.opacity == 1) {
    changeLight(semaforos[1], semaforos[0])
  } else return console.log("el semaforo 1 está en verde")
})

buttons[1].addEventListener("click", function() {
  if (semaforos[1].red.style.opacity == 1) {
    changeLight(semaforos[0], semaforos[1])
  } else return console.log("El semaforo 2 está en verde")
})