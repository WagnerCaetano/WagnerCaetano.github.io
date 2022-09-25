async function sendData() {
  const nome = document.querySelector("#inputNome").value;
  const sobrenome = document.querySelector("#inputSobrenome").value;
  if (nome && nome.length > 0 && sobrenome && sobrenome.length > 0) {
    response = null;

    window.localStorage.getItem("dados");
  }
}
