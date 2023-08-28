import ItemCount from "../ItemCount/ItemCount"


const Item = ({info}) =>{
    return(
        <div className="Cards">
            <img src="../src/img/camperaOso.png" alt="" />
            <p className="tittle">{info.name}</p>
            <p className="price">{info.price}</p>
            <ItemCount inintial={1} stock={5}/>
        </div>

        )
}

export default Item