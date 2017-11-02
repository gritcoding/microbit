let end_time = 0
let timer_started = false
let start_time = 0
input.onButtonPressed(Button.B, () => {
    timer_started = false
    end_time = input.runningTime()
    basic.clearScreen()
    basic.showNumber((end_time - start_time) / 1000)
})
input.onButtonPressed(Button.A, () => {
    if (!(timer_started)) {
        timer_started = true
        start_time = input.runningTime()
    }
})
start_time = 0
end_time = 0
timer_started = false
basic.forever(() => {
    if (timer_started) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
