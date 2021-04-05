input.onButtonPressed(Button.A, function () {
    led.plot(0, 2)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(831, music.beat(BeatFraction.Whole))
    basic.clearScreen()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    range.showColor(neopixel.colors(NeoPixelColors.Violet))
})
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
led.plot(2, 2)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
range = strip.range(2, 2)
music.setVolume(127)
