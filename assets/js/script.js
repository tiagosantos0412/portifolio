tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 80,
            density: { enable: true, area: 800 }
        },
        color: { value: "#1e96fc" }, // Cor azul igual ao seu <p>
        shape: { type: "circle" },
        opacity: {
            value: 0.4,
            random: true
        },
        size: {
            value: { min: 1, max: 3 }
        },
        links: {
            enable: true,
            distance: 150,
            color: "#1e96fc",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: { default: "out" }
        }
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab" // As partículas se conectam ao mouse
            },
            onClick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 200,
                links: { opacity: 0.5 }
            }
        }
    },
    detectRetina: true
});