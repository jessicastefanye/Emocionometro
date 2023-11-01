  // Defina o tempo em milissegundos (1000ms = 1 segundo)
  var tempoParaRedirecionar = 5000; // Redirecionará após 5 segundos

  // Use a função setTimeout para redirecionar após o tempo especificado
  setTimeout(function() {
      // Altere a URL para a qual deseja redirecionar
      window.location.href = '../html/inicio.html';
  }, tempoParaRedirecionar);