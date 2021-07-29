import ListItem from "./ListItem";

const List = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <ListItem key={item.id} item={item} />
            ))}

        </ul>
    )
}

export default List
