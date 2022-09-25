function loadTimer() {
  var countDownDate = new Date();
  countDownDate.setSeconds(new Date().getSeconds() + 2);
  countDownDate.getTime();

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(countDownDate, now, distance, seconds);

    document.getElementById("demo").innerHTML = seconds + " segundos";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("btn-sorteio").style.display = "block";
      document.getElementById("demo").innerHTML = "0 segundos";
    }
  }, 1000);
}

loadTimer();

async function seeResultsButton() {
  sorteado = null;
  dados = JSON.parse(window.localStorage.getItem("dados"));
  if (dados) {
    sorteado = dados.sorteado;
  } else {
    response = null;
    await fetch("https://sheets.googleapis.com/v4/spreadsheets/19tjUJpsWA-96kz8JcIWEMjk_DXGCrnGP79HkEyNbJOM/values/A1:Z10000001?key=AIzaSyAOVBIC4dpt492p3tEJhfxXb6dKRNf8vpk")
      .then((response) => response.json())
      .then((data) => {
        response = data;
      });
    sorteado = response["values"][Math.floor(Math.random() * (response["values"].length - 1)) + 1];
    window.localStorage.setItem("dados", JSON.stringify({ sorteado }));
  }

  document.querySelector("#result-sorteio").innerHTML = "O resultado do sorteado foi: " + sorteado[0] + " " + sorteado[1];
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
}
