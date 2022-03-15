input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (y > 0) {
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    } else {
        x += 0
    }
})
input.onButtonPressed(Button.A, function () {
    if (x > 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    } else {
        x += 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (y < 4) {
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    } else {
        x += 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (x < 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    } else {
        x += 0
    }
})
let y = 0
let x = 0
led.plotBrightness(2, 2, 255)
x = 2
y = 2
