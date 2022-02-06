import useWindowResize from '../hooks/useWindowResize'
import World from '../components/game/World'
import ParallaxDemo from '../components/parallax/ParallaxDemo'
import SpotifyDemo from '../components/spotify/SpotifyDemo'

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

  const noBox = {
    zIndex: '2',
    position: 'relative',
    padding: '64px',
  }

  return (
    <div style={size.width > 550 ? homeBox : noBox}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
        <div>
          <h1>Demos</h1>
        </div>
        <img
          style={size.width > 650 ? {paddingLeft: '16px'} : {maxWidth: '150px', paddingLeft: '16px', height: '100%'}}
          src='crocus.png'
          alt='a pixel art renering of a crocus flower'
        />
      </div>
      <hr />
      <h2>Spotify API</h2>
      <p>
      A simple integration of an external API, once you sign in using implicit OAuth
      your token is picked up and placed in localstorage so that you will be automatically
      signed in on your return. With a valid sign in you can then search the Spotify
      API for musical artists and see them listed below.
      </p>
      <SpotifyDemo />
      <hr />
      <h2>React.js Game Engine</h2>
      <p>
      A work in progress, but I've been trying to combine my two developer passions
      lately, and build some browser games. This is just the beginning of where I
      want this to end up, but I think it shows some clever implementation of React's
      component class as a game object while using mostly plain JS to handle the update
      and draw functions on the Canvas.
      </p>
      <p>
      Use W, A, S, D to control the player sprite. (Move
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
    </div>
  )
}

export default Demos
