let timers: number[] = []
let start_time = 0
let timer_started = false
input.onButtonPressed(Button.AB, () => {
    timer_started = false
    timers.push(input.runningTime())
    for (let i = 0; i <= timers.length - 1; i++) {
        basic.clearScreen()
        basic.showString("Time " + (i + 1))
        basic.showNumber((timers[i] - start_time) / 1000)
    }
})
input.onButtonPressed(Button.A, () => {
    timer_started = true
    start_time = input.runningTime()
    timers = []
})
input.onButtonPressed(Button.B, () => {
    timers.push(input.runningTime())
})
timer_started = false
start_time = 0
timers = []
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
