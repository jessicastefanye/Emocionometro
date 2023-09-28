document.addEventListener("DOMContentLoaded", function () {
    const circulos = document.querySelectorAll('.circle');
    let atraso = 0;

    function animarCirculos() {
        circulos.forEach(circulo => {
            setTimeout(() => {
                circulo.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    circulo.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        circulo.style.transform = 'translateY(0)';
                    }, 200);
                }, 200);
            }, atraso);
            atraso += 200; // Adiciona um pequeno atraso entre os círculos
        });
    }

    // Aguarda 5 segundos antes de iniciar a animação
    setTimeout(animarCirculos, 5000);
});
