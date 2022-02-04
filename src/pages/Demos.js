import useWindowResize from '../hooks/useWindowResize'
import World from '../components/game/World'
import ParallaxDemo from '../components/parallax/ParallaxDemo'

const Demos = () => {

  const size = useWindowResize()

  const homeBox = {
    padding: '64px',
    margin: '64px',
    zIndex: '2',
    position: 'absolute',
    top: '0',
    border: '1px solid #eab4d5',
    width: `${size.width - 256}px`,
    height: `${size.height - 256}px`,
    overflowY: 'scroll'
  }

  return (
    <div style={homeBox}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
        <div>
          <h1>Demos</h1>
        </div>
        <img src='crocus.png' alt='a pixel art renering of a crocus flower'/>
      </div>
      <hr />
      <h2>React.js Game Engine</h2>
      <p>
      A work in progress, but I've been trying to combine my two developer passions
      lately, and build some browser games. This is just the beginning of where I
      want this to end up, but I think it shows some clever implementation of React's
      component class as game object while using mostly plain JS to handle the update
      and draw functions on the Canvas.
      </p>
      <p>
      Use either W, A, S, D or the arrow keys to control the player sprite. (Move
      up to walk into the frame.)</p>
      <World />
      <hr />
      <h2>Parallaxing Panel</h2>
      <p>
      Intended to be used in a webcomic featuring limited animation, this component
      takes an array of image "cell" objects which it then uses to draw those cells
      onto a canvas given a rate of movement and linear function. Then the scroll
      height of an invisible element inside the div is used to determine what "frame"
      of the canvas should be shown. And this all results in a moving image controlled
      by the users scrolling when hovering over the canvas.
      </p>
      <ParallaxDemo />
      <hr />
      <h2>Responsive Filtering Card Deck</h2>
      <p>
      Something akin to the Netflix UI, but instead of showing carousels for each
      section this displays all the options wrapped below and will shrink to fix
      dependent on the width of the containing div. (requires Bootstrap)  
      </p>
    </div>
  )
}

export default Demos
