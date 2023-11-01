import { apiUrl } from "../api.js";

const gameTitle = document.querySelector(".games-container");

export async function getGames() {
  const response = await fetch(apiUrl);
  const results = await response.json();
  // console.log(results);
  return results;
}

const game = await getGames();
// console.log(game);

const gameArray = Array.from(game);

export async function gamesPage() {
  const games = await getGames;
  displayGames(games);
  // console.log(games);
}

export function displayGames(gamesList) {
  gameArray.forEach((game) => {
    // console.log(game.title);
    // console.log(game.description);
    gameTitle.innerHTML += `
        <div class="game">
        <a href="/product-specific.html?id=${game.id}"><img src="${game.image}"
                                    alt="image of ${game.title} cover" class="games-cover"></a>
        <h2 class="games-title">${game.title}</h2>
        <p class="price">${game.price}</p>
        <a href="/cart-full.html" id="add-to-cart">Add to cart</a>
        </div>`;
  });
}
