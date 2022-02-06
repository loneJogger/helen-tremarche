const ArtistTable = (props) => {

  const generateEntries = () => {
    if (props.artists) {
      const tableBody = props.artists.map((e, i) => {
        return (
          <tr key={i}>
            <td>{e.name}</td>
            <td>{generateGenres(e.genres)}</td>
            <td><a href={e.external_urls.spotify} target='_blank' rel="noreferrer">Artist Page</a></td>
          </tr>
        )
      })
      return tableBody
    } else {
      return null
    }
  }

  const generateGenres = (genres) => {
    const list = genres.map((e, i) => {
      return (
        <span>{e + ', '}</span>
      )
    })
    return list
  }

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>GENRES</th>
          <th>LINK</th>
        </tr>
      </thead>
      <tbody>
        {generateEntries()}
      </tbody>
      </table>
    </div>
  )
}

export default ArtistTable
