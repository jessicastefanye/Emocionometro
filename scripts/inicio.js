
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
  
    function redirecionarParaEmocionometro() {
        // Redirecione para a página do Emocionômetro
        window.location.href = "../html/emocio.html";
      }
    
     
    
      function redirecionarParaSair() {
        // Redirecione para a página de sair (ou faça alguma ação de logout)
        window.location.href = "../index.html";
      }