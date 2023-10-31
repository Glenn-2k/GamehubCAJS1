import { apiUrl } from "./api.js";
import { gamesPage } from "../JS/products/games.js"
import { getGames } from "../JS/products/games.js";
import { gamePage } from "../JS/products/game.js"

getGames();


if (location.pathname === "/games.html") {
    gamesPage();
}

if (location.pathname === "/product-specific.html") {
    gamePage();
    }

