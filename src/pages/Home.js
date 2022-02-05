import useWindowResize from '../hooks/useWindowResize'
import { Link } from 'react-router-dom'

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

  const noBox = {
    zIndex: '2',
    position: 'relative',
    padding: '64px',
  }

  return (
    <div style={size.width > 550 ? homeBox : noBox}>
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2rem'}}>
        <div>
          <h1>Helen Tremarche</h1>
          <h2>A full stack web developer.</h2>
        </div>
        <img
          style={size.width > 650 ? {paddingLeft: '16px'} : {maxWidth: '100px', paddingLeft: '16px', height: '100%'}}
          src='crocus.png'
          alt='a pixel art renering of a crocus flower'
        />
      </div>
      <hr/>
      <p style={{fontFamily: 'Josefin', fontSize: '30px'}}>Hello!</p>
      <p>
      Welcome to my little corner of the internet, where I hope I can show
      you a sample of some of the cool and exciting things I can do in place like
      this. I've been doing this work for a few years now, building web apps and
      tools to support my organization, as well as filling whatever miscelaneous
      development needs pop up. I greatly enjoy the opportunity to push past the
      expected, and add new tricks to my arsenal. I've included some more information
      about my skills, some projects I've worked on, and a few live demos for you
      explore. Thanks for taking a look!
      </p>
      <div className='popOut'>
        <Link to={'/demos'}>Demos</Link>
        <Link to={'/projects'}>Projects</Link>
        <a href='HelenTremarcheResume2022.pdf' target='_blank'>Resume</a>
      </div>
    </div>
  )
}

export default Home
