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
    const editarProfessor = (id) => {
      console.log('Editar professor com ID:', id);
      // Redirecionar para a página de edição com o ID do professor
      window.location.href = `../html/editarprof.html=${id}`;
    };

    const excluir = document.createElement('img');
    excluir.src = '../svg/lixeira.svg';
    excluir.style.cursor = 'pointer'; // Faz o ícone de exclusão parecer selecionável
    excluir.addEventListener('click', () => excluirProfessor(professor.id));
    acoes.appendChild(excluir);

    linha.appendChild(acoes);
    tabela.appendChild(linha);
  });
});



function excluirProfessor(id) {
  async function excluirProfessor(id) {
    // Enviar uma requisição DELETE para a API para excluir o professor
    const response = await fetch(`https://emocoes.onrender.com/professores/${id}`, {
      method: 'DELETE',
    });
  
    if (!response.ok) {
      throw new Error(`Erro ao excluir o professor: ${response.statusText}`);
    }
  
    // Recarregar os dados após a exclusão
    getprofessor();
  }
  
}

var botaoUsuario = document.getElementById('btn-usuario');
var listaOculta = document.getElementById('opcoes');

botaoUsuario.addEventListener('click', function(event) {
   
  
  if (listaOculta.style.display === 'none' || listaOculta.style.display === '') {
    listaOculta.style.display = 'block';
  } else {
    listaOculta.style.display = 'none';
  }
});

function retirecionarinicio() {
  
  window.location.href = "../html/inicio.html";
}
function redirecionarParaEmocionometro() {
    // Redirecione para a página do Emocionômetro
    window.location.href = "../html/emocio.html";
  }

 

  function redirecionarParaSair() {
    // Redirecione para a página de sair (ou faça alguma ação de logout)
    window.location.href = "../index.html";
  }

function redirecionarParaEmocionometro() {
    // Redirecione para a página do Emocionômetro
    window.location.href = "../html/emocio.html";
  }

 

  function redirecionarParaSair() {
    // Redirecione para a página de sair (ou faça alguma ação de logout)
    window.location.href = "../index.html";
  }
