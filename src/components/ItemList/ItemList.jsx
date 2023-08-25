import Item from "../Item/Item"
const ItemList = ({data= []}) =>{
    return(
        data.map(NuevoArray => <Item key={NuevoArray} info={NuevoArray}/>)
        )
}

export default ItemList