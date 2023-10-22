//função para exibir conteudo na tela formatado

const renderprofessor = (professores) => {
  const info_content_1 = document.getElementById("info-content1");
  const info_content_2 = document.getElementById("info-content2");
  const info_content_3 = document.getElementById("info-content3");
  const info_content_4 = document.getElementById("info-content4");
  // const info_content_5 = document.getElementById('info-content5')
  let contador = 0;
  info_content_1.innerHTML = "";
  info_content_2.innerHTML = "";
  info_content_3.innerHTML = "";
  info_content_4.innerHTML = "";
  // info_content_5.innerHTML = ''
  professores.forEach((professores) => {
    contador++;
    let corlist = "";
    if (contador % 2 === 0) {
      corlist = "cinza100";
    } else {
      corlist = "cinza50";
    }
    const item = document.createElement("li");
    item.innerHTML = `
          <p>${Professor.nome}</p>
          <p>${Professor.Disciplina}</p>
          <button onclick="editarProfessor(${Professor.id})">Editar</button>
          <button onclick="excluirProfessor(${Professor.id})">Excluir</button>
        `;
    info_content_1.innerHTML += `
          <p class="info-white ${corlist}">${professores.nome}</p>
        `;
    info_content_2.innerHTML += `
          <p class="info-white ${corlist}">${professores.Disciplina}</p>
        `;
    info_content_3.innerHTML += `
          <p class="info-white ${corlist}">${professores.Perfil}</p>
        `;
    info_content_4.innerHTML += `
        <p class="info-white ${corlist}">${
      professores.Status
        ? '<img src="../svg/ativo.svg" alt="" />'
        : '<img src="../svg/desatv.svg" alt="" />'
    }</p>
      `;
  });
};

const btnVerde = () => {
  const purpleBTN = document.getElementById("professores");
  purpleBTN.classList.toggle(".btnstatic-laranja");
};
btnVerde();

//recebe os dados da api
const getprofessores = async (textoPesquisa = null) => {
  let pesquisa = "";

  if (textoPesquisa) {
    pesquisa = `?q=${textoPesquisa}`;
  }

  const retorno = await fetch(
    `https://emocoes.onrender.com/professores${pesquisa}`
  );
  const professores = await retorno.json();

  renderprofessor(professores);
};
getprofessores();

const search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const pesquisa = search.value;
    getprofessores(pesquisa);
  }
});
const lupa = document.getElementById("lupa");
lupa.addEventListener("click", (e) => {
  const pesquisa = search.value;
  getprofessores(pesquisa);
});

//vai a pag editarPtofessor
const editarPtofessor = (id) => {
  window.location = `/html/professores/editarPtofessor.html?id=${id}`;
};

const deletarProfessor = async (id) => {
  try {
    const response = await fetch(
      `https://emocoes.onrender.com/professores/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("Professor excluído com sucesso!");
      getprofessores();
    } else {
      throw new Error(
        "Erro ao excluir o Professor. Por favor, tente novamente."
      );
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

// Resto do código...

// Resto do código...

//vai para pagina mentoias
// const Usuarios = () => {
//    window.location = "/html/Usuarios/Usuarios.html"
//  }
//vai para pagina emocionometro
const emocionometro = () => {
  window.location =
    "C:UsersJessiOneDriveÁrea de TrabalhoProjetoEmocionometrohtmlemocio.html";
};
//vai para pagina alunos
const alunos = () => {
  window.location = "/html/alunos/alunos.html";
};
//retorna a pag novoUsuario
const novoUsuario = () => {
  window.location =
    "file:///C:/Users/Jessi/OneDrive/%C3%81rea%20de%20Trabalho/Projeto/Emocionometro/html/addprof.html";
};
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
