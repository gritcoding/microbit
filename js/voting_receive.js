let players: number[] = []
let count = 0
let item = 0
input.onButtonPressed(Button.A, () => {
    item = 0
    basic.showString("Y")
})
input.onButtonPressed(Button.B, () => {
    item = 1
    basic.showString("N")
})
radio.onDataPacketReceived( ({ receivedNumber, serial }) =>  {
    if (receivedNumber == item) {
        if (players.indexOf(serial) == -1) {
            players.push(serial)
            count = count + 1
        }
    }
})
item = -1
count = 0
players = [0]
radio.setGroup(64)
basic.forever(() => {
    if (item >= 0) {
        basic.showNumber(count)
    }
})
