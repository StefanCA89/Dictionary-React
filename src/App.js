import './App.css';
import React from 'react';
import Dropdown from './Components/Dropdown'
import WordInput from './Components/WordInput'
import WordSearch from './Components/WordSearch'

function App() {
  
  const [word, setWord] = React.useState("")
  const [wordsArray, setWordsArray] = React.useState([])
  const [searchChar, setSearchChar] = React.useState("")

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
        setSearchChar={setSearchChar}
      />
      {searchChar.length !== 0 && <Dropdown wordsArray={wordsArray} searchChar={searchChar}/>}
    </div>
  )
}

export default App;