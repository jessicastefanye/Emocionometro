async function buscarProfessores() {
  try {
    const response = await fetch('https://emocoes.onrender.com/Professores');
    const professores = await response.json();

    renderProfessores(professores);
  } catch (error) {
    console.error(error);
  }
}

function renderProfessores(professores) {
  const infoContent1 = document.getElementById('info-content1');
  const infoContent2 = document.getElementById('info-content2');
  const infoContent3 = document.getElementById('info-content3');
  const infoContent4 = document.getElementById('info-content4');
  const infoContent5 = document.getElementById('info-content5');

  infoContent1.innerHTML = '';
  infoContent2.innerHTML = '';
  infoContent3.innerHTML = '';
  infoContent4.innerHTML = 
  infoContent5.innerHTML = 

  professores.forEach((Professor) => {
    const nome = document.createElement('p');
    nome.textContent = Professor.nome;
    infoContent1.appendChild(nome);

    const disciplina = document.createElement('p');
    disciplina.textContent = Professor.Disciplina;
    infoContent2.appendChild(disciplina);

    const perfil = document.createElement('p');
    perfil.textContent = Professor.Perfil;
    infoContent3.appendChild(perfil);

    const ativo = document.createElement('p');
    ativo.textContent = Professor.Status ? 'true' : 'false';
    infoContent4.appendChild(ativo);

    const acoes = document.createElement('div');
    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.addEventListener('click', () => editarProfessor(Professor.id));
    acoes.appendChild(editarButton);

    const excluirButton = document.createElement('button');
    excluirButton.textContent = 'Excluir';
    excluirButton.addEventListener('click', () => excluirProfessor(Professor.id));
    acoes.appendChild(excluirButton);

    infoContent5.appendChild(acoes);
  });
}

function editarProfessor(id) {
  console.log('Editar Professor com ID:', id);
}

function excluirProfessor(id) {
  console.log('Excluir Professor com ID:', id);
}

buscarProfessores();

const btnPurpleMenu = () => {
  const purpleBTN = document.getElementById('Professores');
  purpleBTN.classList.toggle('btnstatic-purple');
};
btnPurpleMenu();

const getProfessores = async (textoPesquisa = null) => {
  let pesquisa = '';

  if (textoPesquisa) {
    pesquisa = `?q=${textoPesquisa}`;
  }

  const retorno = await fetch(`https://emocoes.onrender.com/Professores${pesquisa}`);
  const professores = await retorno.json();

  buscarProfessores(professores);
};

const search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const pesquisa = search.value;
    getProfessores(pesquisa);
  }
});

const lupa = document.getElementById('lupa');
lupa.addEventListener('click', (e) => {
  const pesquisa = search.value;
  getProfessores(pesquisa);
});

const novoProfessor = (id) => {
  window.location = `file:///C:/Users/Jessi/OneDrive/%C3%81rea%20de%20Trabalho/Projeto/Emocionometro/html/addprof.html${id}`;
};

const deletarMentor = async (id) => {
  await fetch(`https://emocoes.onrender.com/Professores${id}`, {
    method: 'DELETE',
  });
  getProfessores();
};

const mentorias = () => {
  window.location = '/html/mentorias/mentorias.html';
};

const turmas = () => {
  window.location = '/html/turmas/turmas.html';
};

const alunos = () => {
  window.location = '/html/alunos/alunos.html';
};

const novoMentor = () => {
  window.location = '/html/Professores/novoMentor.html';
};
const ativo = document.createElement('p');
ativo.textContent = Professor.Status ? 'true' : 'false';

const imagemAtivo = document.createElement('img');
imagemAtivo.src = Professor.Status ? '../svg/ativo.svg' : '../svg/desatv.svg';

infoContent4.appendChild(ativo);
infoContent4.appendChild(imagemAtivo);
const acoes = document.createElement('div');

const editarButton = document.createElement('button');
editarButton.textContent = 'Editar';
editarButton.addEventListener('click', () => editarProfessor(Professor.id));
acoes.appendChild(editarButton);

const excluirButton = document.createElement('button');
excluirButton.textContent = 'Excluir';
excluirButton.addEventListener('click', () => excluirProfessor(Professor.id));
acoes.appendChild(excluirButton);

const imagemEditar = document.createElement('img');
imagemEditar.src = '../svg/lapis.svg';
imagemEditar.classList.add('imagem-acoes');
acoes.appendChild(imagemEditar);

const imagemExcluir = document.createElement('img');
imagemExcluir.src = '../svg/lixeira.svg';
imagemExcluir.classList.add('imagem-acoes');
acoes.appendChild(imagemExcluir);

infoContent5.appendChild(acoes);
