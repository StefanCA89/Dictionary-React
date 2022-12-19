import './App.css';
import React from 'react';
import Dropdown from './Components/Dropdown'
import WordInput from './Components/WordInput'
import WordSearch from './Components/WordSearch'

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
    if (event.key === "Enter" || event.keyCode === "9") {
    updateArray()
    }
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
      <div className='app-title'>Dictionary</div>
      <div className='word-counter'>Word count {wordsArray.length}</div>
      <WordInput onChange={updateInput} onKeyDown={handleKeyDown} value={word}/>
      <WordSearch onChange={updateInput} value={searchChar} />
      {searchChar.length !== 0 && <Dropdown array={matchArray}/>}
    </div>
  )
}

export default App;