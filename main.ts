function _2G () {
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Double))
    }
}
input.onButtonPressed(Button.A, function () {
    EDCD()
    _2E()
    music.playTone(330, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Quarter))
    _2D()
    music.playTone(294, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    _2G()
    music.rest(music.beat(BeatFraction.Quarter))
    EDCD()
    _3E()
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    _2D()
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Breve))
})
function _2E () {
    for (let index = 0; index < 2; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
}
function EDCD () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
}
function _3E () {
    for (let index = 0; index < 3; index++) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
}
function _2D () {
    for (let index = 0; index < 2; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
}
