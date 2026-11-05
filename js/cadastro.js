function campoVazio(campos) {
  for (let i = 0; i < campos.length; i++) {
    if (campos[i] == "") {
      return true;
    }
  }
  return false;
}

function temBarra(campos) {
  for (let i = 0; i < campos.length; i++) {
    for (let j = 0; j < campos[i].length; j++) {
      if (campos[i][j] == "|") {
        return true;
      }
    }
  }
  return false;
}

function emailValido(email) {
  let temArroba = false;
  let temPonto = false;
  let i = 0;

  while (i < email.length) {
    if (email[i] == "@") {
      temArroba = true;
    }
    if (email[i] == ".") {
      temPonto = true;
    }
    i++;
  }

  return temArroba && temPonto;
}

function cadastrar() {
  let nome = document.getElementById("input_nome").value;
  let email = document.getElementById("input_email").value;
  let senha = document.getElementById("input_senha").value;
  let mensagem = document.getElementById("mensagem");

  let campos = [nome, email, senha];

  if (campoVazio(campos)) {
    mensagem.innerHTML = "Preencha todos os campos.";
  } else if (temBarra(campos)) {
    mensagem.innerHTML = "Não use o caractere | nos campos.";
  } else if (!emailValido(email)) {
    mensagem.innerHTML = "Digite um e-mail válido.";
  } else if (senha.length < 6) {
    mensagem.innerHTML = "A senha precisa ter pelo menos 6 caracteres.";
  } else if (buscarPosicaoPorEmail(email) != -1) {
    mensagem.innerHTML = "Este e-mail já está cadastrado.";
  } else {
    adicionarUsuario(nome, email, senha);
    mensagem.innerHTML = "Conta criada! Redirecionando...";

    setTimeout(function () {
      window.location = "login.html";
    }, 1500);
  }
}