import { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../Button'
import ArtistTable from './ArtistTable'

const SpotifyDemo = () => {

  const CLIENT_ID = 'ea804f33da0a430ba58c2e97c5ddc6c1'
  const REDIRECT_URI = 'https://helen-tremarche.vercel.app/demos'

  const [ token, setToken ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ artists, setArtists ] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let localToken = window.localStorage.getItem("token")
    if (!localToken && hash) {
        localToken = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
        window.location.hash = ""
        window.localStorage.setItem("token", localToken)
    }
    setToken(localToken)
  }, [])

  const updateField = (e, set) => { set(e.target.value) }

  const getArtist = async (callback) => {
    await axios({
      method: 'GET',
      url: `https://api.spotify.com/v1/search?q=${search}&type=artist`,
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      callback(res.data.artists.items)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div style={{marginBottom: '3rem'}}>
      <div style={{marginBottom: '16px', textAlign: 'center'}}>
        <a className='spotifySignIn' href={`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token`}>Sign into Spotify</a>
      </div>
      {token && (
        <>
        <p style={{marginTop: '16px'}}>You are now signed into the Spotify API. Use the search below to find artists.</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <input
            value={search}
            onChange={(event) => updateField(event, setSearch)}
            style={{marginRight: '8px'}}
          />
          <Button execute={() => getArtist(setArtists)} text={'Search Artists'} />
        </div>
        {artists.length > 0 && (
          <ArtistTable artists={artists}/>
        )}
        </>
      )}
    </div>
  )
}

export default SpotifyDemo
