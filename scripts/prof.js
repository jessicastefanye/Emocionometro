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

getProfessores().then(data => {
  const tabela = document.getElementById('corpoTabela');
  data.forEach(professor => {
    const linha = document.createElement('tr');

    ['nome', 'disciplina', 'perfil'].forEach(chave => {
      const celula = document.createElement('td');
      celula.textContent = professor[chave];
      linha.appendChild(celula);
    });
    const ativo = document.createElement('td');
    const imagemAtivo = document.createElement('img');
    imagemAtivo.src = professor.status ? '../svg/ativo.svg' : '../svg/desatv.svg';
    ativo.appendChild(imagemAtivo);
    linha.appendChild(ativo);

    const acoes = document.createElement('td');

    const editar = document.createElement('img');
    editar.src ='../svg/lapis.svg';
    editar.style.cursor = 'pointer'; // Faz o ícone de edição parecer selecionável
    editar.addEventListener('click', () => editarProfessor(professor.id));
    acoes.appendChild(editar);

    const excluir = document.createElement('img');
    excluir.src = '../svg/lixeira.svg';
    excluir.style.cursor = 'pointer'; // Faz o ícone de exclusão parecer selecionável
    excluir.addEventListener('click', () => excluirProfessor(professor.id));
    acoes.appendChild(excluir);

    linha.appendChild(acoes);
    tabela.appendChild(linha);
  });
});

function editarProfessor(id) {
  // Implemente a lógica para editar o professor aqui
}

function excluirProfessor(id) {
  // Implemente a lógica para excluir o professor aqui
}


    // if (professor.status) {
    //   infoContent5.innerHTML += `
    //     <div class="professor-info">
    //       <img src="../svg/ativo.svg" style="width: 50px; height: 50px;">
    //     </div>
    //   `;
    // } else {
    //   infoContent5.innerHTML += `
    //     <div class="professor-info">
    //       <img src="../svg/desatv.svg" style="width: 50px; height: 50px;">
    //     </div>
    //   `;
    // }
    
    
    
//     infoContent3.innerHTML += `
//     <div class="item-professor" data-id="${professor.id}">
//       <button onclick="editarProfessor(${professor.id})"><img class="botao-imagem" src="../svg/lapis.svg" alt="Editar"></button>
//       <button onclick="deletarProfessor(${professor.id})"><img class="botao-imagem" src="../svg/lixeira.svg" alt="Excluir"></button>
//     </div>
  
  
//     `;
//   });
// };

// Função para editar professor
// const editarProfessor = (id) => {
//   window.location = `/caminho/para/pagina/de/edicao?id=${id}`;
// }

// // Função para deletar professor
// const deletarProfesssor = async (id) => {
//   await fetch(`https://emocoes.onrender.com/professores/${id}`, {
//     method: 'DELETE'
//   });
  
//   // Remover a linha do professor do DOM
//   const linhaProfessor = document.querySelector(`.item-professor[data-id="${id}"]`);
//   if (linhaProfessor) {
//     linhaProfessor.remove();
//   }
// }

// Função principal para carregar a lista de professores
// const carregarListaProfessores = async () => {
//   const professores = await getProfessores();
//   criarListaProfessores(professores);
// };

// // Chamar a função principal para carregar a lista de professores
// carregarListaProfessores();

// const search = document.getElementById('search');
// search.addEventListener('keyup', (e) => {
//   if (e.key === 'Enter') {
//     const pesquisa = search.value;
//     getProfessores(pesquisa); // Alterado para 'getProfessores'
//   }
// });

// const lupa = document.getElementById('lupa');
// lupa.addEventListener("click", (e) => {
//   const pesquisa = search.value;
//   getProfessores(pesquisa); // Alterado para 'getProfessores'
// });
