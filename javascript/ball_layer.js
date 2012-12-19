function BallLayer(ball, context) {
  this.ball = ball
  this.context = context
}

BallLayer.prototype = {
  draw: function() {
    this.context.fillStyle = '#f8b500'
    this.context.beginPath()
    this.context.arc(this.ball.position.x, this.ball.position.y, this.ball.radius, 0, Math.PI*2, true)
    this.context.closePath()
    this.context.fill()
  }
}