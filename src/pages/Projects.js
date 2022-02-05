import useWindowResize from '../hooks/useWindowResize'

const Projects = () => {

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
          <h1>Projects</h1>
        </div>
        <img
          style={size.width > 650 ? {paddingLeft: '16px'} : {maxWidth: '200px', paddingLeft: '16px', height: '100%'}}
          src='crocus.png'
          alt='a pixel art renering of a crocus flower'
        />
      </div>
      <hr />
      <div className='popOut'>
        <a href='https://github.com/loneJogger/helen-tremarche' target='_blank' rel="noreferrer">My Profile Page</a>
        <a href='https://github.com/loneJogger/slack-to-sms' target='_blank' rel="noreferrer">Slack to SMS</a>
        <a href='https://github.com/loneJogger/google-drive-backup' target='_blank' rel="noreferrer">Google Drive Backup Tool</a>
        <a href='https://github.com/loneJogger/zoom-archiver' target='_blank' rel="noreferrer">Zoom Archiver</a>
      </div>
    </div>
  )
}

export default Projects
