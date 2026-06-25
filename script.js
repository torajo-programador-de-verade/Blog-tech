
// Script para interatividade dos botões de reação do blog

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-reaction');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.count');
            let currentCount = parseInt(countSpan.textContent, 10);
            
            // Incrementa o contador
            currentCount++;
            countSpan.textContent = currentCount;

            // Efeito visual simples ao clicar
            button.style.transform = 'scale(1.1)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
});

