window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")

    canvas.width = 700
    canvas.height = 700

    var leftKey = false;
    var rightKey = false;
    var topKey = false;
    var bottomKey = false;

    const player = {
        X: canvas.width / 2 - 40,
        Y: canvas.height / 2 - 40,
        W: 80,
        H: 80,
        Speed: 5
    }

    update()

    function update() {
        drawPlayer()

        requestAnimationFrame(update)
    }

    function drawPlayer() {
        if (player.X >= canvas.width - player.W) {
            rightKey = false
        } else if (player.X <= 0) {
            leftKey = false
        } else if (player.Y >= canvas.height - player.H) {
            bottomKey = false
        } else if (player.Y <= 0) {
            topKey = false
        }

        if (rightKey) {
            player.X += player.Speed
        } else if (leftKey) {
            player.X -= player.Speed
        } else if (topKey) {
            player.Y -= player.Speed
        } else if (bottomKey) {
            player.Y += player.Speed
        }

        ctx.fillStyle = "white"
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillRect(player.X, player.Y, player.W, player.H)
    }

    document.addEventListener("keydown", (e) => {
        if (e.keyCode == 38) {
            topKey = true
        } else if (e.keyCode == 39) {
            rightKey = true
        } else if (e.keyCode == 37) {
            leftKey = true
        } else if (e.keyCode == 40) {
            bottomKey = true
        }
    })
    document.addEventListener("keyup", () => {
        topKey = false;
        leftKey = false;
        rightKey = false;
        bottomKey = false;
    })
})

