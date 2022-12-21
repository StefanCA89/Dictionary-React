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
  
  function handleKeyDown(event) {
    if (event.key === "Enter") {
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

  return (
    <div className="app-container">
      <div className='app-title'> Dictionary</div>
      <div className='word-counter'> Word count {wordsArray.length}</div>
      <WordInput 
        onKeyDown={handleKeyDown} 
        value={word}
        setWord={setWord}
      />
      <WordSearch 
        value={searchChar} 
        searchChar={searchChar} 
        setSearchChar={setSearchChar}
        setMatchArray={setMatchArray}
        wordsArray={wordsArray}
      />
      {searchChar.length !== 0 && <Dropdown array={matchArray}/>}
    </div>
  )
}

export default App;