
import './App.css'
import Counter from './Counter'
import User from './User'
import Friends from './Friends'

function App() {

  function handleClick(){
    alert('button click')
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <button onClick={handleClick}>Click me</button>
      <Friends></Friends>
      <User></User>

      <Counter></Counter>
      <User></User>
      
     
    </>
  )
}

export default App
