(function() {
  function initialize() {
    var canvas = document.createElement('canvas')
    var container = document.getElementsByClassName('game_container')[0]
    container.appendChild(canvas)
    var game = new Game(canvas)
    game.start()
  }

  window.addEventListener('load', initialize)
})()
