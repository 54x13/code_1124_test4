for (let x = 0; x <= 4; x++) {
    led.plot(2, x)
    led.plot(x, 2)
    basic.pause(200)
}
basic.forever(function () {
	
})
