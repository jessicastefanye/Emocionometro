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
          <p class="info-white ${corlist}">${professores.nome}</p>
        `;
        info_content_2.innerHTML += `
          <p class="info-white ${corlist}">${professores.diciplina}</p>
        `;
        info_content_3.innerHTML += `
          <div class="info-white dflex ${corlist}">
            <img onclick="editarPtofessor(${professores.id})" src="../../svg/editar.svg" alt="">
            <img onclick="deletarMentor(${professores.id})" src="../../svg/delete.svg" alt="">
          </div>
        `;
      });
    }
    
    const btnPurpleMenu = () => {
      const purpleBTN =document.getElementById('professores')
        purpleBTN.classList.toggle(".btnstatic-laranja")
    }
    btnPurpleMenu()
    
    
     //recebe os dados da api
    const getmentores = async (textoPesquisa = null) => {
      let pesquisa = ''
    
      if (textoPesquisa){
        pesquisa = `?q=${textoPesquisa}`
      }
    
        const retorno = await fetch (`https://emocionimetro.onrender.com/professores${pesquisa}`)
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
    
    
    
    //vai a pag editarPtofessor
    const editarPtofessor = (id)=> {
        window.location = `/html/professores/editarPtofessor.html?id=${id}`
    }
    
    const deletarMentor = async (id) => {
       await  fetch(`https://emocionimetro.onrender.com${id}`, {
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
    const botao = document.getElementById("botao");
    const opcoes = document.getElementById("opcoes");
    
    botao.addEventListener("mouseenter", () => {
        opcoes.style.display = "block";
    });
    
    botao.addEventListener("mouseleave", () => {
        opcoes.style.display = "none";
    });
    
    // Obtém a URL atual da página
    const currentPageURL = window.location.href;
    
    // Percorre cada link nas opções
    const links = opcoes.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
    
        // Verifica se o link corresponde à página atual
        if (link.href === currentPageURL) {
            link.classList.add("selecionado");
        }
    }
    