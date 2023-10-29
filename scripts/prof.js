const getprofessores = async (textoPesquisa = null) => {
  let pesquisa = '';

  if (textoPesquisa) {
    pesquisa = textoPesquisa;
  }
  botaoUsuario.addEventListener('click', function(event) {
       
    var botaoUsuario = document.getElementById('btn-usuario');
    var listaOculta = document.getElementById('opcoes');
    if (listaOculta.style.display === 'none' || listaOculta.style.display === '') {
      listaOculta.style.display = 'block';
    } else {
      listaOculta.style.display = 'none';
    }
  });
  const response = await fetch(`https://emocoes.onrender.com/Professores?pesquisa=${pesquisa}`);
  const data = await response.json();

  const info_content1 = document.getElementById('info-content1');
  const info_content2 = document.getElementById('info-content2');
  const info_content4 = document.getElementById('info-content4');
  const info_content5 = document.getElementById('info-content5');

  info_content1.innerHTML = '';
  info_content2.innerHTML = '';
  info_content4.innerHTML = '';
  info_content5.innerHTML = '';
  // Vai para a página novoProfessor


  data.forEach(professor => {
    info_content1.innerHTML += `
      <p class="info-white">${professor.nome}</p>
    `;
    info_content2.innerHTML += `
      <p class="info-white">${professor.disciplina || ''}</p>
    `;
    info_content4.innerHTML += `
      <p class="info-white">${professor.perfil || ''}</p>
    `;
    info_content5.innerHTML += `
      <p class="info-white">${professor.ativo || ''}</p>
    `;
  });
}



const search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const pesquisa = search.value;
    getprofessores(pesquisa);
  }
});

const lupa = document.getElementById('lupa');
lupa.addEventListener("click", (e) => {
  const pesquisa = search.value;
  getprofessores(pesquisa);
});
const novoProfessor = () => {
  window.location = "../html/professores/addProf.html";
  
}


// Vai para a página editarProfessor
const editarProfessor = (id) => {
  window.location = `/Projeto/Emocionometro/html/addprof.html?id=${id}`;
}

const deletarProfesssor = async (id) => {
  await fetch(`https://emocoes.onrender.com/Professores/${id}`, {
    method: 'DELETE'
  });
  getprofessores();
}

// Vai para a página mentorias
const mentorias = () => {
  window.location = "/html/mentorias/mentorias.html";
}

// Vai para a página turmas
const turmas = () => {
  window.location = "/html/turmas/turmas.html";
}

// Vai para a página alunos
const alunos = () => {
  window.location = "/html/alunos/alunos.html";
}

// Retorna para a página novoMentor
const novoMentor = () => {
  window.location = "/html/professores/novoMentor.html";
}
