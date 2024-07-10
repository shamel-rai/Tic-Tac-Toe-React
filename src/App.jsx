import { useRef, useState } from 'react'
import TicTacToe from './components/TicTacToe'
import ResetBtn from './components/ResetBtn'
import Board from './components/Board'

function App() {
  let [data, setData] = useState(["", "", "", "", "", "", "", "", ""])
  let [count, setCount] = useState(0)
  let [lock, setLock] = useState(false)
  let titleRef = useRef(null)
  let boxes = useRef(Array.from({ length: 9 }, () => useRef(null)));
  return (
    <div>
      <TicTacToe titleRef={titleRef} />
      <Board lock={lock} setCount={setCount} count={count}
        setLock={(setLock)} titleRef={titleRef} data={data} setData={setData} boxes={boxes.current} />
      < ResetBtn titleRef={titleRef} setData={setData} setLock={setLock} boxes={boxes.current} />
    </div>
  )
}

export default App
