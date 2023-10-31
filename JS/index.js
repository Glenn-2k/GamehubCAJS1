import { url } from "./api.js";
import { gamesPage } from "../JS/products/games.js"
import { gamePage } from "../JS/products/game.js"
import { getGames } from "./api.js";

getGames();


if (location.pathname === "/games.html") {
    gamesPage();
}

if (location.pathname === "/product-specific.html") {
    gamePage();
    }

