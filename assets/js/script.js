document.addEventListener("DOMContentLoaded", function() {
    
    // 1. CONFIGURAÇÃO DAS PARTÍCULAS
    if (typeof tsParticles !== "undefined") {
        tsParticles.load("tsparticles", {
            fullScreen: { enable: false },
            fpsLimit: 60,
            particles: {
                number: { value: 80, density: { enable: true, area: 800 } },
                color: { value: "#1e96fc" },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: { min: 1, max: 3 } },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#1e96fc",
                    opacity: 0.2,
                    width: 1
                },
                move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "out" } }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    onClick: { enable: true, mode: "push" }
                },
                modes: { grab: { distance: 200, links: { opacity: 0.5 } } }
            },
            detectRetina: true
        });
    }

    // 2. CONTROLE DOS VÍDEOS NOS CARDS (Play/Pause no Hover)
    const cards = document.querySelectorAll('.projeto-card');
    cards.forEach(card => {
        const video = card.querySelector('.projeto-video');
        if (video) {
            card.addEventListener('mouseenter', () => {
                video.play().catch(() => {}); // Catch vazio para evitar erro de console se o user não interagiu
            });
            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0; 
            });
        }
    });

    // 3. LÓGICA DO MODAL (TELA CHEIA)
    const modal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const btnsExpandir = document.querySelectorAll(".btn-expandir");
    const closeBtn = document.querySelector(".modal-close");

    if (modal && modalVideo) {
        btnsExpandir.forEach((btn) => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Evita que o evento de hover do card interfira
                
                // Pega o source correto dentro do container clicado
                const container = this.closest('.video-container');
                const videoSrc = container.querySelector('video source').getAttribute('src');

                modal.style.display = "flex";
                modalVideo.src = videoSrc;
                modalVideo.load();
                modalVideo.play();
            });
        });

        const fecharModal = () => {
            modal.style.display = "none";
            modalVideo.pause();
            modalVideo.src = "";
        };

        if (closeBtn) closeBtn.addEventListener('click', fecharModal);

        window.addEventListener('click', (event) => {
            if (event.target == modal) fecharModal();
        });
    }
});