
    var botaoUsuario = document.getElementById('btn-usuario');
    var listaOculta = document.getElementById('opcoes');

    botaoUsuario.addEventListener('click', function(event) {
       
      
      if (listaOculta.style.display === 'none' || listaOculta.style.display === '') {
        listaOculta.style.display = 'block';
      } else {
        listaOculta.style.display = 'none';
      }
    });
  
    function redirecionarParaEmocionometro() {
        // Redirecione para a página do Emocionômetro
        window.location.href = "file:///C:/Users/Jessi/OneDrive/%C3%81rea%20de%20Trabalho/Projeto/Emocionometro/html/emocio.html";
      }
    
      function redirecionarParaPerfil() {
        // Redirecione para a página do Perfil
        window.location.href = "pagina_perfil.html";
      }
    
      function redirecionarParaSair() {
        // Redirecione para a página de sair (ou faça alguma ação de logout)
        window.location.href = "https://direcionar().vercel.app/";
      }