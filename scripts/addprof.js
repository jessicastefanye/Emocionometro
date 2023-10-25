document.addEventListener("DOMContentLoaded", function () {
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

    fetch("https://emocoes.onrender.com/Professores", {
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
});
