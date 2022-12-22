export default function WordInput(props) {
    return(
        <input 
            className='word-input'
            name='input' 
            placeholder='Input word here'
            enterKeyHint='done'
            onKeyDown={props.onKeyDown} 
            onChange={event => props.setWord(event.target.value)} 
            value={props.value}
        />
    )
}   