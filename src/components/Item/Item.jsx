import { NavLink } from "react-router-dom"



const Item = ({info}) =>{
    return(
        
            <div className="Cards">
                <img className="img-card" src={info.Image} alt="" />
                <p className="tittle">{info.name}</p>
                <p className="price">${info.price}</p>
                <NavLink to="/item/:id"><button>Detalle</button></NavLink>
            </div>
        
        

        )
}

export default Item

