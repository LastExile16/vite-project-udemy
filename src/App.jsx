import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [name, setName] = useState("Unknown")
  
  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle the button click
  const handleButtonClick = () => {
    setName(inputValue);  // Set the name to the input value
  };

  return (
    <>
      <div>
        <h2>Hello {name}!</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>  
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </p>
        <p>
          <input type='text' name='username' placeholder='Enter your name' onChange={handleInputChange}/>
          <button onClick={handleButtonClick}>Update</button>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
