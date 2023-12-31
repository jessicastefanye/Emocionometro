
    document.getElementById("salvar").addEventListener("click", function (event) {
      event.preventDefault(); // Evita o envio padrão do formulário
  
      var nome = document.getElementById("nome").value;
      var Perfil = document.getElementById("Perfil").value;
      var Disciplina = document.getElementById("Disciplina").value;
      var ativo = document.getElementById("toggle-button").checked;
  
      var novoProfessor = {
        nome: nome,
        Perfil: Perfil,
        Disciplina: Disciplina,
        ativo: ativo,
      };
  
      fetch("https://emocoes.onrender.com/professores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoProfessor),
      })
        .then(function (response) {
          if (response.ok) {
            alert("Novo Professor salvo com sucesso!");
            // Faça qualquer outra ação necessária após salvar os dados
          } else {
            alert("Erro ao salvar o novo Professor. Por favor, tente novamente.");
          }
        })
        .catch(function (error) {
          alert("Erro ao salvar o novo Professor. Por favor, tente novamente.");
          console.log(error);
        });
    });
  
    
   
    const toggleButton = document.getElementById("toggle-button");
  
    toggleButton.addEventListener("change", function () {
      if (toggleButton.checked) {
        toggleButton.parentNode.classList.add("active");
      } else {
        toggleButton.parentNode.classList.remove("active");
      }
    });
  
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