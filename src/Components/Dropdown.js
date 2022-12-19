export default function Dropdown(props) {
    const listItems = props.array.map(arrayItem => <li key={arrayItem}>{arrayItem}</li>)
    return (
        props.array.length > 0 ? <ul className="dropdown-list">{listItems}</ul> : <ul className="dropdown-list-empty">No mathes found</ul>
    )
}