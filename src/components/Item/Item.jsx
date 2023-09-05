import { NavLink } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


const Item = ({info}) =>{
return(

<div className="Cards">
<img className="img-card" src={info.Image} alt={info.detail} />
<p className="tittle">{info.name}</p>
<p className="price">${info.price}</p>
<NavLink to={`/item/${info.id}`}><button>Ver detalle</button> </NavLink>

</div>


)
}

export default Item