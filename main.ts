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
    export const Orb7 = SpriteKind.create()
    export const Projectile2 = SpriteKind.create()
    export const Projectile3 = SpriteKind.create()
    export const Projectile4 = SpriteKind.create()
    export const clone1 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile4, function (sprite, otherSprite) {
    otherSprite.follow(sprite, 92)
    tiles.setWallAt(tiles.getTileLocation(5, 9), false)
    otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ploger,
    [img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 2 b c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c c c 2 2 2 2 c b c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . c 2 2 2 b b b b 2 2 2 f . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f f e . . . 
        . . e b f b 2 b b 2 b c b e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . c b 2 2 2 2 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e b e e f f f f b b e . . 
        . . . e b b e b b 2 2 f e e . . 
        . . . . c e e 2 2 2 2 2 f . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f e e . . . 
        . . e b c b 2 b b 2 b f b e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . c b 2 2 2 2 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 2 c . . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c c c 2 2 2 2 c b c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . c 2 2 2 b b b b 2 2 2 f . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f e e f . . . 
        . . e b b f e e e e e b e . . . 
        . . e e f 2 2 b b e b b e . . . 
        . . . f 2 2 2 2 2 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Orb7, function (sprite, otherSprite) {
    game.gameOver(true)
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile3, function (sprite, otherSprite) {
    otherSprite.follow(sprite, 95)
    tiles.setWallAt(tiles.getTileLocation(5, 8), false)
    otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(Key2, tiles.getTileLocation(1, 28))
    tiles.placeOnTile(Key3, tiles.getTileLocation(17, 1))
    tiles.placeOnTile(Key4, tiles.getTileLocation(26, 18))
})
scene.onOverlapTile(SpriteKind.Projectile2, assets.tile`yellowKeyhole`, function (sprite, location) {
    sprites.destroy(Key2)
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ploger,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 2 c . . . . . . . 
        . . . . c c 2 2 2 c c c . . . . 
        . . c c c c 2 2 2 2 c b c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . c 2 2 2 b b b b 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 2 b b e b b e . . . 
        . . . . f 2 2 2 2 e b b e . . . 
        . . . . c b 2 2 2 2 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 2 c . . . . . . 
        . . . . c c 2 2 2 c c c . . . . 
        . . c c c c 2 2 2 2 c b c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . c 2 2 2 b b b b 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b e e f f . . . 
        . . . . . f e e e b b e f . . . 
        . . . . f 2 b b e b b e . . . . 
        . . . . c 2 2 2 2 e e f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 2 c . . . . . . . 
        . . . . c c 2 2 2 c c c . . . . 
        . . c c c c 2 2 2 2 c b c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . c 2 2 2 b b b b 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 2 b b e b b e . . . 
        . . . . f 2 2 2 2 e b b e . . . 
        . . . . c b 2 2 2 2 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c c 2 c . . . . . . 
        . . . . c c 2 2 2 c c c . . . . 
        . . c c c c 2 2 2 2 c b c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . c 2 2 2 b b b b 2 2 2 f . . 
        . . . f 2 2 2 2 2 2 2 2 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e e b b e . . 
        . . . . f 2 2 b b b e b b e . . 
        . . . . c 2 2 2 2 2 e e e . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal6, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level3`)
    info.startCountdown(60)
    sprites.destroy(Orb6)
    sprites.destroy(Key1)
    Orb7 = sprites.create(img`
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
        `, SpriteKind.Orb7)
    Fire3 = sprites.create(img`
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
        `, SpriteKind.Enemy3)
    Key2 = sprites.create(assets.image`Key1`, SpriteKind.Projectile2)
    Key3 = sprites.create(assets.image`greenKey`, SpriteKind.Projectile3)
    Key4 = sprites.create(assets.image`blueKey`, SpriteKind.Projectile4)
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(Orb7, tiles.getTileLocation(5, 5))
    tiles.placeOnTile(Fire3, tiles.getTileLocation(1, 27))
    tiles.placeOnTile(Key2, tiles.getTileLocation(1, 28))
    tiles.placeOnTile(Key3, tiles.getTileLocation(17, 1))
    tiles.placeOnTile(Key4, tiles.getTileLocation(26, 18))
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
    Key1 = sprites.create(assets.image`Key1`, SpriteKind.Projectile1)
    tiles.placeOnTile(Orb6, tiles.getTileLocation(23, 11))
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
    tiles.placeOnTile(Key1, tiles.getTileLocation(5, 3))
    scene.cameraShake(10, 500)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ploger,
    [img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . c c c 2 2 2 c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 2 f . . . . . 
        . . . e b b e 2 2 2 2 f . . . . 
        . . . . e e 2 2 2 2 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 2 c c . . . . . . 
        . . . . c c c 2 2 2 c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f e e b b b b f . . . . 
        . . . f e b b e e e f . . . . . 
        . . . . e b b e b b 2 f . . . . 
        . . . . f e e 2 2 2 2 c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . c c c 2 2 2 c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 2 f . . . . . 
        . . . e b b e 2 2 2 2 f . . . . 
        . . . . e e 2 2 2 2 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . . . c 2 c c . . . . . . 
        . . . . c c c 2 2 2 c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . e b b e e e e e f . . . . . 
        . . e b b e b b b 2 2 f . . . . 
        . . . e e e 2 2 2 2 2 c . . . . 
        . . . . . f f f f f f . . . . . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile2, function (sprite, otherSprite) {
    otherSprite.follow(sprite, 98)
    tiles.setWallAt(tiles.getTileLocation(5, 7), false)
    otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Ploger,
    [img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 2 b b 2 b f b e . . 
        . . e e f 2 2 2 2 2 2 f e e . . 
        . . . . c b 2 2 2 2 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . c c . . . . . . . . 
        . . . . . . c 2 c . . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c c c 2 2 2 2 c b c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . c 2 2 2 b b b b 2 2 2 f . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b e e e f . . . 
        . . e b b f e e e e b b e . . . 
        . . e e f 2 2 b b e b b e . . . 
        . . . f 2 2 2 2 2 e e c . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
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
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c . . . . . . 
        . . . . . . . c 2 c . . . . . . 
        . . . . c c c 2 2 c c c . . . . 
        . . c c b c 2 2 2 2 c c c c . . 
        . c b b 2 b 2 2 2 2 b 2 b b c . 
        . c b 2 2 b b 2 2 b b 2 2 b c . 
        . . f 2 2 2 b b b b 2 2 2 c . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f e e e b b b b f f . . . 
        . . . e b b e e e e f b b e . . 
        . . . e b b e b b 2 2 f e e . . 
        . . . . c e e 2 2 2 2 2 f . . . 
        . . . . . f f f f f f f . . . . 
        `],
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    tiles.placeOnTile(Ploger, tiles.getTileLocation(1, 1))
})
scene.onOverlapTile(SpriteKind.Projectile3, assets.tile`greenKeyhole`, function (sprite, location) {
    sprites.destroy(Key3)
})
scene.onOverlapTile(SpriteKind.Projectile1, assets.tile`yellowKeyhole`, function (sprite, location) {
    sprites.destroy(Key1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile1, function (sprite, otherSprite) {
    otherSprite.follow(sprite)
    tiles.setWallAt(tiles.getTileLocation(5, 5), false)
})
scene.onOverlapTile(SpriteKind.Projectile4, assets.tile`blueKeyhole`, function (sprite, location) {
    sprites.destroy(Key4)
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
// ideas: cosmic clone (galaxy ref)
// 
// fake orb (flip orb horizontal)
// 
// tutorial
let Orb2: Sprite = null
let Fire3: Sprite = null
let Orb7: Sprite = null
let Key1: Sprite = null
let Orb6: Sprite = null
let Orb3: Sprite = null
let Key4: Sprite = null
let Key3: Sprite = null
let Key2: Sprite = null
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
