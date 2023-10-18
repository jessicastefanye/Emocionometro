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

