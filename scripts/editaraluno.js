
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
      const perfil = document.getElementById("turma").value;
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
  