export default function WordInput(props) {

    function updateInput(event) {
        props.setWord(event.target.value)
    }

    return(
        <input 
            className='word-input'
            name='input' 
            placeholder='Input word here'
            enterKeyHint='done'
            onKeyDown={props.onKeyDown} 
            onChange={updateInput} 
            value={props.value}
        />
    )
}   