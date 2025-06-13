document.addEventListener('DOMContentLoaded', () => {
    // Defina a data de início do relacionamento
    const startDate = new Date('2023-05-17T00:00:00'); // Altere para a sua data!

    function updateTimeTogether() {
        const now = new Date();
        const diff = now - startDate;

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365.25); // Considera anos bissextos

        const remainingDays = Math.floor(days % 365.25);
        const remainingHours = hours % 24;
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        let timeString = '';
        if (years > 0) {
            timeString += `${years} ano${years !== 1 ? 's' : ''}, `;
        }
        if (remainingDays > 0) {
            timeString += `${remainingDays} dia${remainingDays !== 1 ? 's' : ''}, `;
        }
        timeString += `${remainingHours} hora${remainingHours !== 1 ? 's' : ''}, `;
        timeString += `${remainingMinutes} minuto${remainingMinutes !== 1 ? 's' : ''}, `;
        timeString += `${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;

        document.getElementById('time-together').textContent = timeString;
    }

    // Atualiza o contador a cada segundo
    setInterval(updateTimeTogether, 1000);

    // Chama a função uma vez ao carregar para exibir o tempo imediatamente
    updateTimeTogether();
    function createFallingHeart() {
        const heart = document.createElement('span');
        heart.textContent = '💙'; // Emoji de coração azul
        heart.classList.add('falling-heart');

        // Posição horizontal aleatória
        const startX = Math.random() * (window.innerWidth - 50); // -50 para não sair da tela
        heart.style.left = `${startX}px`;

        // Adiciona ao corpo do documento
        document.body.appendChild(heart);

        // Força o reflow para garantir que a transição funcione do estado inicial (opacity: 0, transform: translateY(-50px))
        // para o estado final. Isso é um truque comum para CSS transitions em elementos recém-adicionados.
        heart.offsetHeight; // eslint-disable-line no-unused-expressions

        // Inicia a animação: desce e fica visível
        const fallDuration = Math.random() * (3 - 0.8) + 0.8; // Duração aleatória entre 0.8 e 2 segundos para descer rápido
        const fadeDuration = 0.5; // Duração para aparecer e desaparecer

        heart.style.transitionDuration = `${fallDuration}s, ${fadeDuration}s`;
        heart.style.opacity = '1'; // Coração aparece
        heart.style.transform = `translateY(${window.innerHeight + 50}px)`; // Desce para fora da tela

        // Remove o coração do DOM quando a animação terminar
        heart.addEventListener('transitionend', () => {
            heart.remove();
        });
    }

    // Chama a função para criar corações em intervalos regulares
    // Você pode ajustar o intervalo para controlar a frequência
    setInterval(createFallingHeart, 100); // Cria um coração a cada 300 milissegundos
});