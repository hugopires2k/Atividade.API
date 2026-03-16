const container = document.getElementById('container');

async function getCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        renderCards(data.results);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

function renderCards(characters) {
    container.innerHTML = characters.map(char => `
        <div class="card">
            <img src="${char.image}" alt="${char.name}">
            <div class="card-info">
                <h2>${char.name}</h2>
                <p>Status: ${char.status}</p>
                <p>Espécie: ${char.species}</p>
            </div>
        </div>
    `).join('');
}

getCharacters();