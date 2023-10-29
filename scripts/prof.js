// Função para obter os dados dos professores da API
const getProfessores = async (pesquisa) => {
  try {
    const response = await fetch('https://emocoes.onrender.com/professores');
    let data = await response.json();

    // Se uma pesquisa foi fornecida, filtrar os professores
    if (pesquisa) {
      data = data.filter(professor => professor.nome.includes(pesquisa));
    }

    return data;
  } catch (error) {
    console.log('Erro ao obter os dados dos professores:', error);
  }
};

// Função para criar a lista de professores
const criarListaProfessores = (professores) => {
  const infoContent1 = document.querySelector('#info-content1');
  const infoContent2 = document.querySelector('#info-content2');
  const infoContent3 = document.querySelector('#info-content3');
  const infoContent4 = document.querySelector('#info-content4');
  const infoContent5 = document.querySelector('#info-content5');

  infoContent1.innerHTML = '';
  infoContent2.innerHTML = '';
  infoContent3.innerHTML = '';
  infoContent4.innerHTML = '';
  infoContent5.innerHTML = '';

  professores.forEach((professor) => {
    infoContent1.innerHTML += `<p class="item-professor" data-id="${professor.id}">${professor.nome}</p>`;
    infoContent2.innerHTML += `<p class="item-professor" data-id="${professor.id}">${professor.disciplina}</p>`;
    infoContent4.innerHTML += `<p class="item-professor" data-id="${professor.id}">${professor.perfil}</p>`;
    if (professor.status) {
      infoContent5.innerHTML += `
        <div class="professor-info">
          <img src="../svg/ativo.svg" style="width: 50px; height: 50px;">
        </div>
      `;
    } else {
      infoContent5.innerHTML += `
        <div class="professor-info">
          <img src="../svg/desatv.svg" style="width: 50px; height: 50px;">
        </div>
      `;
    }
    
    
    
    infoContent3.innerHTML += `
    <div class="item-professor" data-id="${professor.id}">
      <button onclick="editarProfessor(${professor.id})"><img class="botao-imagem" src="../svg/lapis.svg" alt="Editar"></button>
      <button onclick="deletarProfessor(${professor.id})"><img class="botao-imagem" src="../svg/lixeira.svg" alt="Excluir"></button>
    </div>
  
  
    `;
  });
};

// Função para editar professor
const editarProfessor = (id) => {
  window.location = `/caminho/para/pagina/de/edicao?id=${id}`;
}

// Função para deletar professor
const deletarProfesssor = async (id) => {
  await fetch(`https://emocoes.onrender.com/professores/${id}`, {
    method: 'DELETE'
  });
  
  // Remover a linha do professor do DOM
  const linhaProfessor = document.querySelector(`.item-professor[data-id="${id}"]`);
  if (linhaProfessor) {
    linhaProfessor.remove();
  }
}

// Função principal para carregar a lista de professores
const carregarListaProfessores = async () => {
  const professores = await getProfessores();
  criarListaProfessores(professores);
};

// Chamar a função principal para carregar a lista de professores
carregarListaProfessores();

const search = document.getElementById('search');
search.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    const pesquisa = search.value;
    getProfessores(pesquisa); // Alterado para 'getProfessores'
  }
});

const lupa = document.getElementById('lupa');
lupa.addEventListener("click", (e) => {
  const pesquisa = search.value;
  getProfessores(pesquisa); // Alterado para 'getProfessores'
});
