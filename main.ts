namespace SpriteKind {
    export const Goal1 = SpriteKind.create()
    export const Goal2 = SpriteKind.create()
    export const Goal3 = SpriteKind.create()
    export const Goal4 = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const Goal5 = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Goal6 = SpriteKind.create()
    export const Projectile1 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal4, function (sprite, otherSprite) {
    info.startCountdown(30)
    tiles.setCurrentTilemap(tilemap`level16`)
    sprites.destroy(Orb4)
    sprites.destroy(Fire1)
    Fire2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy2)
    Orb5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Goal5)
    tiles.placeOnTile(Orb5, tiles.getTileLocation(23, 23))
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(Fire2, tiles.getTileLocation(22, 23))
    scene.cameraShake(10, 500)
})
scene.onOverlapTile(SpriteKind.Projectile1, assets.tile`keyhole`, function (sprite, location) {
    sprites.destroy(Key1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal3, function (sprite, otherSprite) {
    info.startCountdown(30)
    sprites.destroy(Orb3)
    tiles.setCurrentTilemap(tilemap`test`)
    Fire1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy1)
    tiles.placeOnTile(Fire1, tiles.getTileLocation(1, 11))
    Orb4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Goal4)
    tiles.placeOnTile(Orb4, tiles.getTileLocation(1, 18))
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    scene.cameraShake(10, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal5, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level19`)
    info.startCountdown(30)
    sprites.destroy(Orb5)
    sprites.destroy(Fire2)
    Orb6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Goal6)
    Key1 = sprites.create(assets.image`Key`, SpriteKind.Projectile1)
    tiles.placeOnTile(Orb6, tiles.getTileLocation(23, 11))
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(Key1, tiles.getTileLocation(5, 3))
    scene.cameraShake(10, 500)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile1, function (sprite, otherSprite) {
    otherSprite.follow(sprite)
    tiles.setWallAt(tiles.getTileLocation(5, 5), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal2, function (sprite, otherSprite) {
    info.startCountdown(30)
    sprites.destroy(Orb2)
    tiles.setCurrentTilemap(tilemap`level13`)
    Orb3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Goal3)
    tiles.placeOnTile(Orb3, tiles.getTileLocation(1, 13))
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    scene.cameraShake(10, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal1, function (sprite, otherSprite) {
    info.startCountdown(30)
    sprites.destroy(Orb1)
    tiles.setCurrentTilemap(tilemap`level12`)
    Orb2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Goal2)
    tiles.placeOnTile(Orb2, tiles.getTileLocation(3, 14))
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    scene.cameraShake(10, 500)
})
let Orb2: Sprite = null
let Orb6: Sprite = null
let Orb3: Sprite = null
let Key1: Sprite = null
let Orb5: Sprite = null
let Fire2: Sprite = null
let Fire1: Sprite = null
let Orb4: Sprite = null
let Orb1: Sprite = null
let Ploger: Sprite = null
info.startCountdown(30)
tiles.setCurrentTilemap(tilemap`level0`)
scene.cameraShake(10, 500)
Ploger = sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 2 b c . . . . . . 
    . . . . c c c 2 2 c c c . . . . 
    . . c c c c 2 2 2 2 c b c c . . 
    . c b b 2 b 2 2 2 2 b 2 b b c . 
    . c b 2 2 b b 2 2 b b 2 2 b c . 
    . . c 2 2 2 b b b b 2 2 2 f . . 
    . . f f 2 2 2 2 2 2 2 2 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 2 b b 2 b c b e . . 
    . . e e f 2 2 2 2 2 2 f e e . . 
    . . . . c b 2 2 2 2 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
controller.moveSprite(Ploger)
scene.cameraFollowSprite(Ploger)
Orb1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . 6 6 6 5 5 6 6 6 . . . . 
    . . . 7 7 7 7 6 6 6 6 6 6 . . . 
    . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
    . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
    . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
    . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
    . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
    . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
    . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
    . . . . 6 6 8 8 8 8 6 6 . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Goal1)
tiles.placeOnTile(Orb1, tiles.getTileLocation(1, 14))
