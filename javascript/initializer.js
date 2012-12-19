(function() {
  function initialize() {
    var canvas = document.createElement('canvas')
    document.body.appendChild(canvas)
    var game = new Game(canvas)
    game.start()
  }

  window.addEventListener('load', initialize)
})()
