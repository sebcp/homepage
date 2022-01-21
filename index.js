const canvas = document.querySelector("#gamefield")
const ctx = canvas.getContext("2d")
canvas.setAttribute("height",window.innerHeight)
canvas.setAttribute("width", window.innerWidth)
const game = new GameOfLife()
game.gameSetUp()

window.onload = () => {
    game.gameSetUp();
    game.arrayRandomize();
    game.fillArray();
    window.setInterval(() => {
        game.runGame();
    }, 700)
    document.querySelector("#restart").addEventListener("click", () => {
        game.gameSetUp();
        game.arrayRandomize();
        game.fillArray();
        window.setInterval(() => {
            game.runGame();
        }, 700)
    })
}
