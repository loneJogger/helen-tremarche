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
          style={size.width > 650 ? {paddingLeft: '16px'} : {maxWidth: '150px', paddingLeft: '16px', height: '100%'}}
          src='crocus.png'
          alt='a pixel art renering of a crocus flower'
        />
      </div>
      <p>
      Select repositories from my <a className='projectLink' href='https://github.com/loneJogger' target='_blank' rel="noreferrer">GitHub</a>
      </p>
      <hr />
      <a
        className='projectLink'
        href='https://github.com/loneJogger/helen-tremarche'
        target='_blank'
        rel="noreferrer"
      ><h2>My Profile Page</h2></a>
      <p>
      This is the repository for the code for this page you're viewing right now!
      </p>
      <hr />
      <a
        className='projectLink'
        href='https://github.com/loneJogger/slack-to-sms'
        target='_blank'
        rel="noreferrer"
      ><h2>Slack to SMS</h2></a>
      <p>
      A two way Slack to text sms connection. Send a text message to a Slack channel,
      text a phone number from Slack. This project utilizes the Twilio Function environment
      to send text messages received on one of your account phone numbers into a
      Slack App webhook and then a node.js server to receive requests from a Slack
      App slack command and then uses the Twilio API to send your message out to an
      external phone number as a text message.
      </p>
      <hr />
      <a
        className='projectLink'
        href='https://github.com/loneJogger/google-drive-backup'
        target='_blank'
        rel="noreferrer"
      ><h2>Google Drive Backup Tool</h2></a>
      <p>
      This python script will backup all files and files contained within subfolders
      for a given folder into your Google Drive. It creates a new folder in your
      Drive named with a timestamp indicating when you performed the backup and places
      into it any files which are new or have been updated since the last time the
      process was run. Before running you will need to set up a Google Developer App
      with the Drive API enabled, and generate app credentials to OAuth into the application.
      </p>
      <hr />
      <a
        className='projectLink'
        href='https://github.com/loneJogger/zoom-archiver'
        target='_blank'
        rel="noreferrer"
      ><h2>Zoom Archiver</h2></a>
      <p>
      Zoom Archiver is a process designed to run periodically out of AWS's Elastic
      Container Service (ECS). The process is setup to run based on a CRON schedule
      provided to the ECS cluster it will run out of and collect all Zoom videos
      in your organization's cloud storage for provided user accounts maintained
      in a google sheet which are about to be automatically deleted out of the Zoom
      cloud due to those videos being of a certain age set within the Zoom cloud
      platform. AWS S3 Bucket storage can be much more cost effective than paying
      for increasing Zoom Cloud Storage especially if you configure your bucket
      to place older items into S3 Glacier storage.
      </p>
    </div>
  )
}

export default Projects
