import React from "react"

export default function WordSearch(props) {
    const {setSearchChar, setMatchArray, wordsArray, searchChar} = props

    function updateInput(event) {
        setSearchChar(event.target.value)
    }

    React.useEffect (() => {
        if (!searchChar) {
          setMatchArray([])
          return
        }
        setMatchArray(wordsArray.filter(wordItem => wordItem.includes(searchChar)))
    },[searchChar])

    return (
        <input
            className='word-search'
            name='search' 
            placeholder='Search for word' 
            onChange={updateInput} 
            value={props.value} 
        />
    )
}