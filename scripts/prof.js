//função para exibir conteudo na tela formatado
const rendermentor = (professores) =>{
    const info_content_1 = document.getElementById('info-content1')
    const info_content_2 = document.getElementById('info-content2')
    const info_content_3 = document.getElementById('info-content3')
    
    let contador = 0
      info_content_1.innerHTML = ''
      info_content_2.innerHTML = ''
      info_content_3.innerHTML = ''
    
    professores.forEach(professores => {
        contador++;
        let corlist = '';
        if (contador % 2 === 0) {
          corlist = 'cinza100'
        }else{
            corlist = 'cinza50'
        }
    
        info_content_1.innerHTML += `
          <p class="info-white ${corlist}">${professores.mentor}</p>
        `;
        info_content_2.innerHTML += `
          <p class="info-white ${corlist}">${professores.email}</p>
        `;
        info_content_3.innerHTML += `
          <div class="info-white dflex ${corlist}">
            <img onclick="editarMentor(${professores.id})" src="../../svg/editar.svg" alt="">
            <img onclick="deletarMentor(${professores.id})" src="../../svg/delete.svg" alt="">
          </div>
        `;
      });
    }
    
    const btnPurpleMenu = () => {
      const purpleBTN =document.getElementById('professores')
        purpleBTN.classList.toggle("btnstatic-purple")
    }
    btnPurpleMenu()
    
    
     //recebe os dados da api
    const getmentores = async (textoPesquisa = null) => {
      let pesquisa = ''
    
      if (textoPesquisa){
        pesquisa = `?q=${textoPesquisa}`
      }
    
        const retorno = await fetch (`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/professores${pesquisa}`)
        const professores = await retorno.json()
    
        rendermentor(professores)
    }
    getmentores()
    
    const search = document.getElementById('search')
    search.addEventListener('keyup', (e) =>{
      if(e.key === 'Enter'){
        const pesquisa = search.value
        getmentores(pesquisa)
      }
    })
    const lupa = document.getElementById('lupa')
    lupa.addEventListener("click", (e) =>{
      const pesquisa = search.value
        getmentores(pesquisa)
    })
    
    
    
    //vai a pag editarMentor
    const editarMentor = (id)=> {
        window.location = `/html/professores/editarMentor.html?id=${id}`
    }
    
    const deletarMentor = async (id) => {
       await  fetch(`https://api-projeto-de-conclusao-do-modulo-1.onrender.com/professores/${id}`, {
            method: 'DELETE'
        })
        getmentores()
    }
    
    
    //vai para pagina mentoias
    const Usuarios = () => {
       window.location = "/html/Usuarios/Usuarios.html"
     }
    //vai para pagina emocionometro
    const emocionometro = () => {
       window.location = "/html/emocionometro/emocionometro.html"
    }
    //vai para pagina alunos
    const alunos = () => {
       window.location = "/html/alunos/alunos.html"
    }
    //retorna a pag novoUsuario
    const novoUsuario = () => {
      window.location = "/html/professores/novoUsuario.html"
    }