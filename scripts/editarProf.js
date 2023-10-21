const  formulario = document.getElementById('formulario')
let mentoresId = null

//recupera o ID do professor que foi enviado no parametro da URL
const getIdUrl = () => {
    console.log(window.location.search)
    const paramString = window.location.search
    // URLSearchParams define metodos para buscar parametros da URL
    const pararms = new URLSearchParams(paramString)
    // params.get('o_nome_do_campo_que_esta_na_url)'
    // ou seja, ao utulizar o .get eu posso recuperar um determinado campo
    mentoresId = pararms.get('id')
}


// recuperar professor
const buscarMentores = async () => {
    // Dou um fetch na url do json-server enviando o id dos professores
    const response= await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/professores/${mentoresId}`)
    const professores = await response.json()
    return professores
}

// Envia os dados para o api jason server

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const professor = formulario.elements['nome'].value
    const perfil = formulario.elements['perfil'].value

    const professores = {
        professor,
        perfil,

    }
   editarMentores(professores)

})

// Injeto os dados do livro no formulario, com dados do json
const carregarDadosFormulario = async (professores) => {
    document.getElementById('nome').value = professores.professor
    document.getElementById('perfil').value = professores.perfil
}

const editarMentores = async (professores) => {
    await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/professores/${mentoresId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(professores)
    })
    // Redireciono o usuario para a tela de listagem
    window.location = "/html/professores/professores.html"

}

// Ao entrar na página, a funcão carregarDados é chamada
const carregarDados = async () => {
    //recupera o ID
    getIdUrl()
    // Buscar noticias
    const professores = await buscarMentores()
    // Coloca os dados no formulario
    carregarDadosFormulario(professores)

}

// inicia a aplicação
carregarDados()

//funções menu/nagar
const professores = () => {
    window.location = "./professores.html"
  }
  //vai para pagina mentoias
  const mentorias = () => {
     window.location = "../mentorias/mentorias.html"
   }
  //vai para pagina turmas
  const turmas = () => {
     window.location = "/html/turmas/turmas.html"
  }
  //vai para pagina alunos
  const alunos = () => {
     window.location = "/html/alunos/alunos.html"
  }
  //vai apra pagina nova mentoria
  const novaMentoria = () => {
     window.location = "/html/mentorias/novaMentoria.html"
  }