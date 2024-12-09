// Capturar un Pokémon aleatorio
document.getElementById("catchBtn").addEventListener("click", () => {
    const container = document.getElementById("pokemonContainer");
    container.innerHTML = "Buscando Pokémon...";

    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151 + 1)}`)
        .then(response => response.json())
        .then(data => {
            container.innerHTML = `
                <h2>¡Has capturado a ${data.name.toUpperCase()}!</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
            `;
        })
        .catch(() => container.innerHTML = "¡Error al capturar Pokémon!");
});

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("formMessage");

    if (name && email) {
        message.textContent = `¡Gracias por registrarte, ${name}!`;
    } else {
        message.textContent = "Por favor, completa todos los campos.";
    }
});
