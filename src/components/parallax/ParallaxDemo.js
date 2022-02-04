import ScrollBox from './ScrollBox'
import Cell from './cell'
import useSpriteLoader from '../../hooks/useSpriteLoader'

const ParallaxDemo = () => {

  const sprites = useSpriteLoader([
    '/parallax/moon.png',
    '/parallax/mountains.png',
    '/parallax/windows.png'
  ])

  const sky = new Cell(sprites[0], 'linear', 0.05, -20, null, {m: 0, b: 0})
  const mount = new Cell(sprites[1], 'linear', 0.12, -65, null, {m:0, b: 70})
  const windows = new Cell(sprites[2], 'linear', 0.67, -300, null, {m:0, b:0})
  const cellSet02 = [ sky, mount, windows ]

  return (
    <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem'}}>
    <div style={{height: "300px", padding: "32px", width: "400px", border: '4px solid #eab4d5', borderRadius: '12px'}}>
      <ScrollBox pid={'test01'} cells={cellSet02} scrollHeight={10000}/>
    </div>
    </div>
  )
}

export default ParallaxDemo
