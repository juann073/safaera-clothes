import ItemCount from "../ItemCount/ItemCount"

export



const ItemDetail = ({data}) =>{
    return(
        <div className="container">
            <div className="detail">
                <img className="img-card" src={data.Image} alt={data.detail} />
                <div className="content">
                    <h1>{data.name}</h1>
                    <p>${data.price}</p>
                    <p>{data.detail}</p>
                    <ItemCount inintial={1} stock={5}/>
                </div>
            </div>
        </div>
        
        )
}

export default ItemDetail