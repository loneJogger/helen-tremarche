import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useInterval from '../../hooks/useInterval'

const ScrollBox = (props) => {

  const [ frame, setFrame ] = useState(0)
  const canvasRef = useRef(null)

  useInterval(() => {
    setFrame(getScrollHeight(props.pid))
  }, 42)

  useEffect(() => {
    const canvas =  canvasRef.current
    const context = canvas.getContext('2d')
    draw(context, canvas)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frame])

  const getScrollHeight = (id) => {
    const d = document.getElementById(id)
    const h = d.scrollTop
    return h
  }

  const draw = (context, canvas) => {
    context.clearRect(0,0, canvas.width, canvas.height)
    context.fillStyle = '#eab4d5'
    context.fillRect(0,0, canvas.width, canvas.height)
    props.cells.forEach(cell => {
      const x = cell.startX + frame/((props.scrollHeight - canvas.height)/canvas.height) * cell.speed
      let y = 0
      if (cell.gType === 'linear') {
        y = cell.gDef.m * x + cell.gDef.b/100 * canvas.height
      }
      if (cell.range === null || (x >= cell.range.a && x <= cell.range.b)) {
        context.drawImage(cell.imagePath, x, y)
      }
    })
  }

  return (
    <Wrapper id={props.pid + '_wrap'}>
      <Scrollable id={props.pid}>
        <img style={{opacity: '0'}} src={`/parallax/${props.scrollHeight}.png`} alt=''/>
      </Scrollable>
      <Interior id={props.pid + '_int'}>
        <canvas
          ref={canvasRef}
          width={canvasRef.current !== null ? document.getElementById(props.pid + '_int').clientWidth : 0}
          height={canvasRef.current !== null ? document.getElementById(props.pid + '_int').clientHeight : 0}
        />
      </Interior>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  border: 2px solid black;
`

const Scrollable = styled.div`
  opacity: 0.1;
  background-color: #F0D0D0;
  overflow-y: scroll;
  width: 100%;
  z-index: 2;
`

const Interior = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 1;
`

export default ScrollBox
