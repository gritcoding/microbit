let left_right = 0
let current_y = 0
let portal_y = 0
let is_paused = false
let up_down = 0
let current_x = 0
let portal_x = 0
let total_score = 0
function randomize_portal()  {
    portal_x = Math.random(5)
    portal_y = Math.random(5)
    while (portal_x == current_x && portal_y == current_y) {
        portal_x = Math.random(5)
        portal_y = Math.random(5)
    }
}
function update_location()  {
    up_down = input.rotation(Rotation.Pitch)
    left_right = input.rotation(Rotation.Roll)
    if (left_right < -10) {
        current_x = current_x - 1
    } else if (left_right > 10) {
        current_x = current_x + 1
    }
    if (up_down < -10) {
        current_y = current_y - 1
    } else if (up_down > 10) {
        current_y = current_y + 1
    }
    current_x = Math.min(Math.max(0, current_x), 4)
    current_y = Math.min(Math.max(0, current_y), 4)
}
input.onButtonPressed(Button.A, () => {
    is_paused = !(is_paused)
})
input.onButtonPressed(Button.B, () => {
    is_paused = true
    basic.clearScreen()
    basic.showNumber(total_score)
    basic.pause(500)
    basic.clearScreen()
    is_paused = false
})
total_score = 0
is_paused = false
basic.forever(() => {
    current_x = 2
    current_y = 2
    randomize_portal()
    led.plot(portal_x, portal_y)
    while (portal_x != current_x || portal_y != current_y) {
        if (!(is_paused)) {
            led.plot(portal_x, portal_y)
            led.unplot(current_x, current_y)
            basic.pause(300)
            update_location()
            led.plot(current_x, current_y)
        }
        basic.pause(500)
    }
    total_score = total_score + 1
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.clearScreen()
})
