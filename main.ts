namespace SpriteKind {
    export const yes = SpriteKind.create()
}
scene.setBackgroundImage(assets.image`cityscape2`)
let mySprite = sprites.create(assets.image`hi`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
forever(function () {
    mySprite.setVelocity(0, 100)
})
