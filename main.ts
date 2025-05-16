input.onButtonPressed(Button.A, function () {
    basic.showNumber(dht11_dht22.readData(dataType.temperature))
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(dht11_dht22.readData(dataType.humidity))
    basic.pause(2000)
})
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P1,
    true,
    false,
    true
    )
})
