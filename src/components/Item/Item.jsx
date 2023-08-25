const Item = (info) =>{
    return(
        <div className="Item">
            <img src={info.id} alt="" />
            <p className="tittle">???</p>
            <p className="price">{info.price}</p>
        </div>
        
        )
}

export default Item