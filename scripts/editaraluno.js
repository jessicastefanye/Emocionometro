
    // document.getElementById("salvar").addEventListener("click", function (event) {
    //   event.preventDefault(); // Evita o envio padrão do formulário
  
    //   var nome = document.getElementById("nome").value;
    //   var Perfil = document.getElementById("Perfil").value;
    //   var Disciplina = document.getElementById("Disciplina").value;
    //   var ativo = document.getElementById("toggle-button").checked;
  
    //   var novoProfessor = {
    //     nome: nome,
    //     Perfil: Perfil,
    //     Disciplina: Disciplina,
    //     ativo: ativo,
    //   };
  
    //   fetch("https://emocoes.onrender.com/alunos", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(novoProfessor),
    //   })
    //     .then(function (response) {
    //       if (response.ok) {
    //         alert("Novo Professor salvo com sucesso!");
    //         // Faça qualquer outra ação necessária após salvar os dados
    //       } else {
    //         alert("Erro ao salvar o novo Professor. Por favor, tente novamente.");
    //       }
    //     })
    //     .catch(function (error) {
    //       alert("Erro ao salvar o novo Professor. Por favor, tente novamente.");
    //       console.log(error);
    //     });
    // });
  
    //funções menu/nagar
    const Professores = () => {
      window.location = "./Professores.html";
    };
    //vai para pagina mentoias
    const mentorias = () => {
      window.location = "../mentorias/mentorias.html";
    };
    //vai para pagina turmas
    const turmas = () => {
      window.location = "/html/turmas/turmas.html";
    };
    //vai para pagina alunos
    const alunos = () => {
      window.location = "/html/alunos/alunos.html";
    };
    const toggleButton = document.getElementById("toggle-button");
  
    toggleButton.addEventListener("change", function () {
      if (toggleButton.checked) {
        toggleButton.parentNode.classList.add("active");
      } else {
        toggleButton.parentNode.classList.remove("active");
      }
    });
  
  function toggleSubMenu() {
    const opcoes = document.getElementById("opcoes");
    opcoes.classList.toggle("ativo");
  }
  
  function redirectToPage(page) {
    window.location.href = page;
  }
  document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio do formulário padrão
  
      const nome = document.getElementById("nome").value;
      const perfil = document.getElementById("Perfil").value;
      const ativo = document.getElementById("toggle-button").checked;
  
      // Crie um objeto com os dados a serem enviados para a API
      const dados = {
        nome: nome,
        perfil: perfil,
        ativo: ativo,
      };
  
      // Substitua 'URL_DA_API' pelo URL real da sua API
      const apiUrl = 'https://emocoes.onrender.com/alunos';
  
      fetch(apiUrl, {
        method: 'POST', // Você pode precisar ajustar o método HTTP, dependendo da sua API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
      })
        .then((response) => response.json())
        .then((data) => {
          // Manipule a resposta da API, se necessário
          console.log(data);
          alert("Usuário salvo com sucesso!");
        })
        .catch((error) => {
          console.error('Erro ao salvar o usuário:', error);
          alert("Erro ao salvar o usuário. Tente novamente.");
        });
    });
  });
  