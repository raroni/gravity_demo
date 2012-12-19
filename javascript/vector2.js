function Vector2(x, y) {
  this.x = x
  this.y = y
}

Vector2.prototype = {
  add: function(vector) {
    var vector = new Vector2(
      this.x + vector.x,
      this.y + vector.y
    )
    return vector
  },
  subtract: function(vector) {
    var vector = new Vector2(
      this.x - vector.x,
      this.y - vector.y
    )
    return vector
  },
  multiply: function(scalar) {
    var vector = new Vector2(
      this.x*scalar,
      this.y*scalar
    )
    return vector
  },
  length: function() {
    var squareSum = Math.pow(this.x, 2) + Math.pow(this.y, 2)
    return Math.sqrt(squareSum)
  },
  duplicate: function() {
    var duplicate = new Vector2(this.x, this.y)
    return duplicate
  }
}
