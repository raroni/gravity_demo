(function() {
  var gravity = new Vector2(0, 0.0004)
  var bounciness = 0.8

  function Ball(canvas) {
    this.position = new Vector2(400, 40)
    this.velocity = new Vector2(0, 0)
    this.radius = 15
    this.canvas = canvas
    this.jitterInterval = 2500
    this.timeUntilJitter = this.jitterInterval
  }

  Ball.prototype = {
    update: function(timeDelta) {
      this.checkBounce()
      this.applyGravity(timeDelta)
      this.checkJitter(timeDelta)

      this.updatePosition(timeDelta)
      this.performCollisionDetection()
    },
    checkBounce: function() {
      if(this.touchesGround()) {
        this.velocity.y = this.velocity.y*-bounciness
      }
      if(this.touchesLeftWall()) {
        this.velocity.x = this.velocity.x*-bounciness
      }
      else if(this.touchesRightWall()) {
        this.velocity.x = this.velocity.x*-bounciness
      }
    },
    touchesLeftWall: function() {
      return this.position.x === this.getMinX()
    },
    touchesRightWall: function() {
      return this.position.x === this.getMaxX()
    },
    applyGravity: function(timeDelta) {
      var gravitationalForce = gravity.multiply(timeDelta)
      this.velocity = this.velocity.add(gravitationalForce)
    },
    updatePosition: function(timeDelta) {
      var positionChange = this.velocity.multiply(timeDelta)
      this.position = this.position.add(positionChange)
    },
    performCollisionDetection: function() {
      this.position.y = Math.min(this.position.y, this.getMaxY())
      this.position.x = Math.min(this.position.x, this.getMaxX())
      this.position.x = Math.max(this.position.x, this.getMinX())
    },
    touchesGround: function() {
      return this.position.y+this.radius === this.canvas.height
    },
    getMaxY: function() {
      return this.canvas.height - this.radius
    },
    getMinX: function() {
      return this.radius
    },
    getMaxX: function() {
      return this.canvas.width-this.radius
    },
    checkJitter: function(timeDelta) {
      this.timeUntilJitter -= timeDelta
      if(this.timeUntilJitter <= 0) {
        this.timeUntilJitter += this.jitterInterval
        this.jitter(timeDelta)
      }
    },
    jitter: function(timeDelta) {
      var jitterForceX = (Math.random()-0.5)*timeDelta*0.05
      var jitterForceY = 0
      if(this.velocity.y >= -0.1) {
        jitterForceY = timeDelta*-0.02
      }
      
      var jitterForce = new Vector2(jitterForceX, jitterForceY)
      this.velocity = this.velocity.add(jitterForce)
    }
  }

  window.Ball = Ball
})()
