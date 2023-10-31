export const url = "https://api.noroff.dev/api/v1/gamehub/";


export async function getGames() {
    const response = await fetch(url);
    const results = await response.json();

    console.log(results);
}