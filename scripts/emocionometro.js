let aberto=false

function expandir(){
    

const  menu = document.getElementById('lista-oculta')
if(aberto==false){
    menu.style.display="block"
    aberto=true
}else{
    menu.style.display="none"
    aberto=false
}
console.log(menu)    

}

// window.onload = function() {
//     var botaoUsuario = document.getElementById('btn-usuario');
//     var listaOculta = document.getElementById('lista-oculta');
  
//     botaoUsuario.addEventListener('click', function(event) {
      
//       if (listaOculta.style.display === 'none' || listaOculta.style.display === '') {
//         listaOculta.style.display = 'block';
//       } else {
//         listaOculta.style.display = 'none';
//       }
//     });
//   };
  

