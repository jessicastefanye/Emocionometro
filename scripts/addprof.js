const novoprofessor = async (professores) => {
    await fetch('https://emocoes.onrender.com/Professores',{
        method: 'POST',
        headers: {
            "Accept": 'application/json, text/plain, */*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(professores)
    })
   window.location = "/html/professores/professores.html"
}

const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', async (event) => {
event.preventDefault()

    const professor = formulario.elements['nome'].value
    const perfil = formulario.elements['perfil'].value
    console.log(perfil)
    const professores = {
            professor,
            perfil,
    }

    novoprofessor(professores)

})

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