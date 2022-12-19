import './App.css';
import React, { useEffect } from 'react';
import Dropdown from './Components/Dropdown'

function App() {

  const [word, setWord] = React.useState("")
  const [wordsArray, setWordsArray] = React.useState([])
  const [searchChar, setSearchChar] = React.useState("")
  const [matchArray, setMatchArray] = React.useState([])

  function updateInput(event) {
    const {name, value} = event.target
    name === "input" ? setWord(value) : setSearchChar(value)
  }

  function handleKeyDown(event) {
    event.key === "Enter" && updateArray()
  }

  function updateArray() {
    if(word && !wordsArray.includes(word)) {
      setWordsArray(prevState => {
        return [...prevState, word]
      })
    }
    setWord("")
  }

  React.useEffect (() => {
    if (!searchChar) {
      setMatchArray([])
      return
    }
    setMatchArray(wordsArray.filter(wordItem => wordItem.includes(searchChar)))
  },[searchChar])

  return (
    <div className="app-container">
        <input className='word-input' name='input' placeholder='Input word here' onKeyDown={handleKeyDown} onChange={updateInput} value={word}/>
        <input className='word-search' name='search' placeholder='Search for word' onChange={updateInput} value={searchChar} />
        {searchChar.length !== 0 && <Dropdown array={matchArray}/>}
    </div>
  )
}

export default App;