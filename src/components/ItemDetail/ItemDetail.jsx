import ItemCount from "../ItemCount/ItemCount"

export



const ItemDetail = ({data}) =>{
    return(
        <div className="container">
            <div className="detail">
                <img className="detail-image" src="" alt="" />
                <div className="content">
                    <h1>{data.name}</h1>

                    <ItemCount inintial={1} stock={5}/>
                </div>
            </div>
        </div>
        
        )
}

export default ItemDetail