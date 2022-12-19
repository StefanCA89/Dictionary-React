export default function WordInput(props) {
    return(
        <input 
        className='word-input'
        name='input' 
        placeholder='Input word here'
        enterkeyhint='done'
        onKeyDown={props.onKeyDown} 
        onChange={props.onChange} 
        value={props.value}
        />
    )
}