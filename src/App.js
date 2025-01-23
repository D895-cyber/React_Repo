
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';



function App() {
  let count = 0
  const [countState, setCountState] = useState(0)
  const handleCount = () => {
    setCountState((previous)=>previous+1)
    setCountState((previous)=>previous+1)
    console.log(count);
    count++
  }

  return(
  <>
  {countState}
  <div onClick={(handleCount)}>clickme</div>
  <div></div>
  {/* <Home/> */}
  </>
  )
}

export default App;
