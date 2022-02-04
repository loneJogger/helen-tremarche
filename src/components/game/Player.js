export default class Player {
  constructor (args) {
    this.position = args.position
    this.direction = args.direction
    this.animFrame = args.a_frame
    this.image = new Image()
    this.image.src = 'player.png'
    this.currentFrame = 0
    this.isMotion = false
    this.totalanimFrames = 4
    this.moveSpeed = 2
    this.animSpeed = 10
  }

  move () {
    if (this.isMotion) {
      this.animFrame = parseInt(this.currentFrame/this.animSpeed)
      this.currentFrame += 1
      if (this.direction === 'l') {
        this.position.x -= this.moveSpeed
      }
      if (this.direction === 'r') {
        this.position.x += this.moveSpeed
      }
      if (this.direction === 'd') {
        this.position.y += this.moveSpeed
      }
      if (this.direction === 'u') {
        this.position.y -= this.moveSpeed
      }
      if (this.animFrame >= this.totalanimFrames) {
        this.animFrame = 0
        this.currentFrame = 0
      }
    }
  }

  draw (state) {
    const context = state.context
    if (this.direction === 'l' && this.animFrame === 0) {
      context.drawImage(this.image, 0, 0, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'l' && this.animFrame === 1) {
      context.drawImage(this.image, 64, 0, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'l' && this.animFrame === 2) {
      context.drawImage(this.image, 0, 0, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'l' && this.animFrame === 3) {
      context.drawImage(this.image, 128, 0, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'r' && this.animFrame === 0) {
      context.drawImage(this.image, 0, 64, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'r' && this.animFrame === 1) {
      context.drawImage(this.image, 64, 64, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'r' && this.animFrame === 2) {
      context.drawImage(this.image, 0, 64, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'r' && this.animFrame === 3) {
      context.drawImage(this.image, 128, 64, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'd' && this.animFrame === 0) {
      context.drawImage(this.image, 0, 128, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'd' && this.animFrame === 1) {
      context.drawImage(this.image, 64, 128, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'd' && this.animFrame === 2) {
      context.drawImage(this.image, 0, 128, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'd' && this.animFrame === 3) {
      context.drawImage(this.image, 128, 128, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'u' && this.animFrame === 0) {
      context.drawImage(this.image, 0, 192, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'u' && this.animFrame === 1) {
      context.drawImage(this.image, 64, 192, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'u' && this.animFrame === 2) {
      context.drawImage(this.image, 0, 192, 64, 64, this.position.x, this.position.y, 64, 64)
    }
    if (this.direction === 'u' && this.animFrame === 3) {
      context.drawImage(this.image, 128, 192, 64, 64, this.position.x, this.position.y, 64, 64)
    }
  }

  render (state) {
    if (state.keys.left) {
      this.direction = 'l'
      this.isMotion = true
    }
    if (state.keys.right) {
      this.direction = 'r'
      this.isMotion = true
    }
    if (state.keys.down) {
      this.direction = 'd'
      this.isMotion = true
    }
    if (state.keys.up) {
      this.direction = 'u'
      this.isMotion = true
    }
    if (!state.keys.left && !state.keys.right && !state.keys.down && !state.keys.up) {
      this.isMotion = false
    }
    this.move()
    this.draw(state)
  }
}
