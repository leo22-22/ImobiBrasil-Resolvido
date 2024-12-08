//1.
const texto = document.querySelector("h1"); // Cria uma constante e seleciona o elemento <h1>.
texto.textContent = 'Bem vindo ao Nosso Site'; // Altera o conteúdo de texto do <h1> para "Bem vindo ao Nosso Site".

//2.
const image = document.querySelector('.hero-content img'); // Cria uma constante e seleciona a imagem dentro de .hero-content.
image.src = 'assets/images/london.webp'; // Substitui a imagem atual pelo caminho fornecido.

//3.
const esconder = document.querySelector('.availability-content'); // Cria uma constante e seleciona o elemento .availability-content.
esconder.style.display = 'none'; // Oculta o elemento selecionado usando display: none.

//4.
const paragrafo = document.querySelector('footer p'); // Cria uma constante e seleciona o parágrafo dentro do rodapé.
paragrafo.style.color = 'blue'; // Altera a cor do texto para azul.
paragrafo.style.fontWeight = 'bold'; // Define o texto em negrito.

//5.
const elementofind = document.querySelector('.find'); // Cria uma constante e seleciona o elemento .find.
const elementohero = document.querySelector('.hero'); // Cria uma constante e seleciona o elemento .hero.
elementohero.after(elementofind); // Insere o elemento .find após o elemento .hero.

//6.
const botao = document.getElementById('btn-contact'); // Cria uma constante e seleciona o botão com o id btn-contact.
botao.addEventListener('click', function() { // Adiciona um evento de clique ao botão.
  alert("O botão foi acionado!"); // Exibe uma mensagem de alerta ao clicar no botão.
});

//7.
const selecionar = document.querySelector('select[name="location"]'); // Cria uma constante e seleciona o elemento <select> com o atributo name="location".
const novaOpcao = document.createElement('option'); // Cria um novo elemento <option>.
novaOpcao.value = 'presidente-prudente'; // Define o valor da nova opção como "presidente-prudente".
novaOpcao.textContent = 'Presidente Prudente'; // Define o texto exibido da nova opção.
selecionar.appendChild(novaOpcao); // Adiciona a nova opção ao elemento <select>.

//8.
const blog = document.querySelector('nav .navbar-list li:nth-child(4)'); // Cria uma constante e seleciona o quarto item de lista na navbar.
const novoli = document.createElement('li'); // Cria um novo elemento <li>.
novoli.innerHTML = '<a href="#about-us">ABOUT US</a>'; // Define o conteúdo HTML do novo item da lista.
blog.after(novoli); // Insere o novo item de lista após o quarto item selecionado.

//9.
const formulario = document.querySelector('footer form'); // Cria uma constante e seleciona o formulário no rodapé.
formulario.addEventListener('submit', function(e) { // Adiciona um evento ao formulário para impedir o envio.
  const email = document.querySelector('footer input[type="email"]'); // Seleciona o campo de email no formulário.
  if (email.value === '') { // Verifica se o campo de email está vazio.
    e.preventDefault(); // Impede o envio do formulário.
    alert('O campo de email está vazio'); // Exibe uma mensagem de alerta.
  }
});

//10.
// Garante que o código é executado após o carregamento completo do conteúdo HTML da página.
document.addEventListener('DOMContentLoaded', function() {
  // Cria o container principal para os depoimentos
  const depoimentosContainer = document.createElement('div');
  depoimentosContainer.id = 'depoimentos-container';
  
  // Encontra a seção de contatos (substitua '.find' pelo seletor correto caso necessário)
  const secaoDeContatos = document.querySelector('.find'); // Seleciona a seção de contatos.

  // Insere o container de depoimentos acima da seção de contatos
  if (secaoDeContatos) {
    secaoDeContatos.parentNode.insertBefore(depoimentosContainer, secaoDeContatos);
  } else {
    // Caso a seção de contatos não seja encontrada, insere ao final da página
    document.body.appendChild(depoimentosContainer);
  }

  // Função para criar e adicionar um novo depoimento
  function adicionarDepoimento(nome, texto) {
    // Cria o div para o depoimento
    const depoimentoDiv = document.createElement('div');
    depoimentoDiv.classList.add('depoimento');
    
    // Cria o título com o nome
    const nomeElement = document.createElement('h5');
    nomeElement.textContent = nome;
    
    // Cria o parágrafo com o texto do depoimento
    const textoElement = document.createElement('p');
    textoElement.textContent = texto;
    
    // Adiciona o nome e o texto ao div do depoimento
    depoimentoDiv.appendChild(nomeElement);
    depoimentoDiv.appendChild(textoElement);
    
    // Adiciona o novo depoimento no container
    depoimentosContainer.appendChild(depoimentoDiv);
  }

  // Adiciona Depoimentos fictícios
  adicionarDepoimento('João Silva', 'Esse site me ajudou muito a encontrar as informações que eu precisava! Excelente serviço!');
  adicionarDepoimento('Maria Oliveira', 'A experiência foi ótima! O atendimento foi rápido e eficaz.');
  adicionarDepoimento('Carlos Souza', 'Eu recomendo! A navegação é fácil e encontrei tudo o que procurava.');
  adicionarDepoimento('Ana Costa', 'Muito bom! Estou impressionada com a qualidade do conteúdo e o suporte oferecido.');
});
