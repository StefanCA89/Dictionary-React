export default function WordSearch(props) {
    return (
        <input
        className='word-search'
        name='search' 
        placeholder='Search for word' 
        onChange={props.onChange} 
        value={props.value} 
        />
    )
}