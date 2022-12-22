export default function WordSearch(props) {
    return (
        <input
            className='word-search'
            name='search' 
            placeholder='Search for word' 
            onChange={event => props.setSearchChar(event.target.value)} 
            value={props.value} 
        />
    )
}