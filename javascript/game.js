function Game(canvas) {
  canvas.width = 800
  canvas.height = 400
  this.canvas = canvas
  this.context = canvas.getContext('2d')

  this.ball = new Ball(canvas)
  this.ballLayer = new BallLayer(this.ball, this.context)
}

Game.prototype = {
  start: function() {
    // here you can load images, sounds, etc.
    this.scheduleTick()
  },
  scheduleTick: function() {
    requestAnimationFrame(this.tick.bind(this))
  },
  tick: function(timestamp) {
    if(this.lastTickAt) {
      var timeDelta = timestamp - this.lastTickAt
      if(timeDelta < 100) {
        this.update(timeDelta)
        this.draw(timeDelta)
      }
    }
    this.lastTickAt = timestamp
    this.scheduleTick()
  },
  clear: function() {
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
  },
  update: function(timeDelta) {
    this.ball.update(timeDelta)
  },
  draw: function(timeDelta) {
    this.clear()
    this.ballLayer.draw()
  }
}
