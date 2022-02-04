import { Component } from 'react'

import Player from './Player'

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40,
  W: 87,
  A: 65,
  S: 83,
  D: 68
}

export default class World extends Component {

  constructor(props) {
    super(props)
    this.state = {
      context: null,
      isControl: false,
      keys: {
        left: 0,
        right: 0,
        down: 0,
        up: 0
      }
    }
    this.player = []
    this.walls = []
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyboard.bind(this, false))
    window.addEventListener('keydown', this.handleKeyboard.bind(this, true))
    const context = this.refs.world_canvas.getContext('2d')
    this.setState({ context: context })
    this.start(context)
  }

  compontentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyboard)
    window.removeEventListener('keydown', this.handleKeyboard)
  }

  handleKeyboard(value, e) {
    let keys = this.state.keys
    if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value
    if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value
    if (e.keyCode === KEY.DOWN || e.keyCode === KEY.S) keys.down = value
    if (e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value
    this.setState({ keys: keys })
  }

  update() {
    const context = this.state.context
    const player = this.player[0]
    context.fillStyle = '#eab4d5'
    context.fillRect(0, 0, 640, 576)
    player.render(this.state)
    requestAnimationFrame(() => { this.update() })
  }

  start() {
    let player = new Player({
      position: {
        x: 160,
        y: 296
      },
      direction: 'd',
      animFrame: 0
    })
    this.player.push(player)
    this.setState({ isControl: true })
    requestAnimationFrame(() => { this.update() })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
      <canvas
        ref='world_canvas'
        width={320}
        height={288}
        style={{marginBottom: '3rem'}}
      />
      </div>
    )
  }
}
