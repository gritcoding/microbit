let weapon = 0
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(0)
    basic.showString("Y")
})
input.onButtonPressed(Button.B, () => {
    radio.sendNumber(1)
    basic.showString("N")
})
input.onGesture(Gesture.Shake, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    weapon = Math.round(Math.random() * 4)
    if (weapon == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (weapon == 1) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
radio.setGroup(64)
radio.setTransmitSerialNumber(true)
basic.forever(() => {

})
