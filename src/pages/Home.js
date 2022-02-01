import useWindowResize from '../hooks/useWindowResize'

const Home = () => {

  const size = useWindowResize()

  const box = {
    padding: '64px',
    margin: '64px',
    zIndex: '2',
    position: 'absolute',
    top: '0',
    border: '1px solid #eab4d5',
    width: `${size.width - 256}px`,
    height: `${size.height - 256}px`
  }

  return (
    <div style={box}>
      <div>
        <div>
          <h1>Helen Tremarche</h1>
          <h2>A full stack web developer.</h2>
        </div>
      </div>
      <hr/>
      <p></p>
    </div>
  )
}

export default Home
