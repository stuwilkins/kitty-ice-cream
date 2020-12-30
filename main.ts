info.onCountdownEnd(function () {
    game.over(true, effects.starField)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    projectile.destroy(effects.warmRadial, 500)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    3 3 3 . . . . 3 3 3 . . . . 
    c d d 3 . . 3 d d c . . . . 
    c b d d 3 3 d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f 3 f 
    f b d d b b d d 3 3 f f 3 f 
    . f 3 3 3 3 3 3 d 3 3 3 3 f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(4)
info.setScore(0)
info.startCountdown(180)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 3 3 b 3 1 1 1 3 3 . . 
        . . . . 3 1 1 d 3 3 3 3 3 1 3 . 
        . . . 3 1 1 1 1 3 1 3 1 3 3 1 3 
        . . 3 3 3 3 3 3 3 3 1 1 3 3 3 3 
        . 3 1 3 3 1 1 1 3 3 d 1 1 b . . 
        . 3 3 3 3 3 3 1 3 3 3 d 1 1 3 . 
        . b d 3 1 3 3 3 1 3 3 1 1 1 3 . 
        . 4 b 3 1 1 3 3 3 1 3 1 3 3 3 . 
        . 4 4 d 3 1 3 3 3 1 d 1 3 3 b . 
        . 4 d b d 3 1 1 1 3 3 1 1 3 . . 
        4 d d 5 b d 3 3 1 3 3 3 3 3 . . 
        4 5 d 5 5 b b d 3 3 3 3 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `, projectile, 100, 100)
    projectile.setFlag(SpriteFlag.BounceOnWall, true)
})
forever(function () {
    music.playMelody("C5 G G B G G A F ", 120)
})
