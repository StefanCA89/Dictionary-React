export default function Dropdown(props) {
    const {wordsArray, searchChar} = props
    const matchArray = wordsArray.filter(wordItem => wordItem.includes(searchChar))
    const listItems = matchArray.map(arrayItem => <li key={arrayItem}>{arrayItem}</li>)
    return (
        matchArray.length > 0 ? <ul className="dropdown-list">{listItems}</ul> : <ul className="dropdown-list-empty">No mathes found</ul>
    )
} 