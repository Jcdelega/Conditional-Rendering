
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Game from './components/Game'
import './App.css'

function App() {

  return (
    <>
      <div>
        <div>
          <Game/>
        </div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h4>Vite + React</h4>
    </>
  )
}

export default App
