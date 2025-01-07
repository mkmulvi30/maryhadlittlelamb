function _2G () {
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Double))
        Middle_G += 1
    }
}
input.onButtonPressed(Button.A, function () {
    EDCD()
    _2E()
    music.playTone(330, music.beat(BeatFraction.Double))
    Middle_E += 1
    music.rest(music.beat(BeatFraction.Quarter))
    _2D()
    music.playTone(294, music.beat(BeatFraction.Double))
    Middle_D += 1
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    Middle_E += 1
    _2G()
    music.rest(music.beat(BeatFraction.Quarter))
    EDCD()
    _3E()
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    Middle_E += 1
    _2D()
    music.playTone(330, music.beat(BeatFraction.Whole))
    Middle_E += 1
    music.playTone(294, music.beat(BeatFraction.Whole))
    Middle_D += 1
    music.playTone(262, music.beat(BeatFraction.Breve))
    Middle_G += 1
})
function _2E () {
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        Middle_E += 1
    }
}
function EDCD () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    Middle_E += 1
    music.playTone(294, music.beat(BeatFraction.Whole))
    Middle_D += 1
    music.playTone(262, music.beat(BeatFraction.Whole))
    Middle_C += 1
    music.playTone(294, music.beat(BeatFraction.Whole))
    Middle_D += 1
}
function _3E () {
    for (let index = 0; index < 3; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        Middle_E += 1
    }
}
function _2D () {
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        Middle_D += 1
    }
}
let Middle_E = 0
let Middle_D = 0
let Middle_G = 0
let Middle_C = 0
basic.forever(function () {
    if (Middle_E >= 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Middle_D >= 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (Middle_C >= 1) {
        basic.showIcon(IconNames.Diamond)
    } else if (Middle_G >= 1) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.showIcon(IconNames.Chessboard)
    }
})
