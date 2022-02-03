import useWindowResize from '../hooks/useWindowResize'

const Home = () => {

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
          <h1>Projects</h1>
        </div>
        <img src='crocus.png' alt='a pixel art renering of a crocus flower'/>
      </div>
      <hr />
    </div>
  )
}

export default Home
