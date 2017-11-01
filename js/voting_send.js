input.onButtonPressed(Button.A, () => {
    radio.sendNumber(0)
    basic.showString("Y")
})
input.onButtonPressed(Button.B, () => {
    radio.sendNumber(1)
    basic.showString("N")
})
radio.setGroup(64)
radio.setTransmitSerialNumber(true)
basic.forever(() => {
	
})
