
function carregarLista(chave) {
  let texto = localStorage.getItem(chave);

  if (texto == null || texto == "") {
    return [];
  }
  return texto.split("|");
}

function salvarLista(chave, lista) {
  localStorage.setItem(chave, lista.join("|"));
}

function buscarPosicaoPorEmail(email) {
  let emails = carregarLista("emails");

  for (let i = 0; i < emails.length; i++) {
    if (emails[i] == email) {
      return i;
    }
  }
  return -1;
}

function pegarNome(posicao) {
  let nomes = carregarLista("nomes");
  return nomes[posicao];
}

function pegarSenha(posicao) {
  let senhas = carregarLista("senhas");
  return senhas[posicao];
}

function adicionarUsuario(nome, email, senha) {
  let nomes = carregarLista("nomes");
  let emails = carregarLista("emails");
  let senhas = carregarLista("senhas");

  nomes.push(nome);
  emails.push(email);
  senhas.push(senha);

  salvarLista("nomes", nomes);
  salvarLista("emails", emails);
  salvarLista("senhas", senhas);
}

