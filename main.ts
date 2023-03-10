radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == player1_choice) {
        basic.showString("Draw!")
    } else {
        if (receivedNumber < player1_choice) {
            if (receivedNumber == 2 && player1_choice == 0) {
                basic.showString("Win!")
                game.addScore(1)
                basic.showNumber(game.score())
            } else {
                basic.showString("Win!")
                game.addScore(1)
                basic.showNumber(game.score())
            }
        } else {
            if (player1_choice == 2 && receivedNumber == 0) {
                basic.showString("Lose")
            } else {
                basic.showString("Lose")
            }
        }
    }
})
input.onButtonPressed(Button.A, function () {
    if (computer == player1_choice) {
        basic.showString("Draw!")
    } else {
        if (computer < player1_choice) {
            if (computer == 2 && player1_choice == 0) {
                basic.showString("Win!")
                game.addScore(1)
                basic.showNumber(game.score())
            } else {
                basic.showString("Win!")
                game.addScore(1)
                basic.showNumber(game.score())
            }
        } else {
            if (player1_choice == 2 && computer == 0) {
                basic.showString("Lose")
            } else {
                basic.showString("Lose")
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    game.setScore(0)
})
input.onGesture(Gesture.Shake, function () {
    player1_choice = randint(0, 2)
    computer = randint(0, 2)
    if (player1_choice == 0) {
        basic.showLeds(`
            . . # # #
            . # # # #
            # # # # #
            # # # # .
            # # # . .
            `)
        radio.sendNumber(0)
    }
    if (player1_choice == 1) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        radio.sendNumber(1)
    }
    if (player1_choice == 2) {
        basic.showLeds(`
            . . . # #
            # . # . .
            . # . . .
            # . # . .
            . . . # #
            `)
        radio.sendNumber(2)
    }
})
let computer = 0
let player1_choice = 0
basic.showString("SHAKE TO PLAY")
game.setScore(0)
basic.forever(function () {
    radio.setGroup(6)
})
