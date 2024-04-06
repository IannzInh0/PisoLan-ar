document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('search').value.toLowerCase();
    const games = document.getElementById('games-list').getElementsByTagName('li'); 

    for (let game of games) {
        const gameName = game.innerText.toLowerCase();
        if (gameName.includes(searchTerm)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    }
});
