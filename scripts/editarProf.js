const  formulario = document.getElementById('formulario')
let mentoresId = null

//recupera o ID do Professor que foi enviado no parametro da URL
const getIdUrl = () => {
    console.log(window.location.search)
    const paramString = window.location.search
    // URLSearchParams define metodos para buscar parametros da URL
    const pararms = new URLSearchParams(paramString)
    // params.get('o_nome_do_campo_que_esta_na_url)'
    // ou seja, ao utulizar o .get eu posso recuperar um determinado campo
    mentoresId = pararms.get('id')
}


// recuperar Professor
const buscarMentores = async () => {
    // Dou um fetch na url do json-server enviando o id dos Professores
    const response= await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/Professores/${mentoresId}`)
    const Professores = await response.json()
    return Professores
}

// Envia os dados para o api jason server

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const Professor = formulario.elements['nome'].value
    const Perfil = formulario.elements['Perfil'].value

    const Professores = {
        Professor,
        Perfil,

    }
   editarMentores(Professores)

})

// Injeto os dados do livro no formulario, com dados do json
const carregarDadosFormulario = async (Professores) => {
    document.getElementById('nome').value = Professores.Professor
    document.getElementById('Perfil').value = Professores.Perfil
}

const editarMentores = async (Professores) => {
    await fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/Professores/${mentoresId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Professores)
    })
    // Redireciono o usuario para a tela de listagem
    window.location = "/html/Professores/Professores.html"

}

// Ao entrar na página, a funcão carregarDados é chamada
const carregarDados = async () => {
    //recupera o ID
    getIdUrl()
    // Buscar noticias
    const Professores = await buscarMentores()
    // Coloca os dados no formulario
    carregarDadosFormulario(Professores)

}

// inicia a aplicação
carregarDados()

//funções menu/nagar
const Professores = () => {
    window.location = "./Professores.html"
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