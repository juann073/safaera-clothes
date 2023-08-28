const ItemDetail = ({detail}) =>{
    return(
        <div className="container">
            <div className="detail">
                <img className="detail-image" src="" alt="" />
                <div className="content">
                    <h1>{detail.name}</h1>
                </div>
            </div>
        </div>
        
        )
}

export default ItemDetail