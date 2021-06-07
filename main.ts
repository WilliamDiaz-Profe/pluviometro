input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 15; index++) {
        Cantidad_agua += randint(1, 6)
        basic.showNumber(Cantidad_agua)
    }
    contador += Cantidad_agua / 15
    basic.showString("\"Promedio\"")
    basic.showNumber(contador)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (Cantidad_agua >= 2) {
        cont_2m += cont_2m + 1
    }
    basic.showString("\"frecuencia\"")
    basic.showNumber(cont_2m)
})
let cont_2m = 0
let Cantidad_agua = 0
let contador = 0
contador = 0
Cantidad_agua = 0
cont_2m = 0
