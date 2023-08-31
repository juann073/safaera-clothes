import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";

const NuevoArray =
[
    {id:1, name:"Buzo Oversize",categoria:"Ropa", Image:"/img/buzoOver.png",detail:"Buzo blanco Oversize" ,price:15000},
    {id:2, name:"Buzo Oversize Planet",categoria:"Ropa", Image:"/img/buzoPlanet.png",detail:"Buzo Planet Oversize" ,price:15000},
    {id:3, name:"Camisa",categoria:"Ropa", Image:"/img/camisa.png",detail:"Camisa Blanca Vintage" ,price:9000},
    {id:4, name:"Campera Osito",categoria:"Ropa", Image:"/img/camperaOso.png",detail:"Cmapera abrigada de Oso" ,price:25000},
    {id:5, name:"Pantalon Cargo Gris",categoria:"Ropa", Image:"/img/cargoGris.png",detail:"Pantalon Cargo Gris" ,price:16000},
    {id:6, name:"Pantalon Cargo Negro",categoria:"Ropa", Image:"/img/cargoNegro.png",detail:"Pantalon Cargo Negro" ,price:16000},
    {id:7, name:"Chomba Piqué",categoria:"Ropa", Image:"/img/chombaPique.png",detail:"Chomba pique color Blanco" ,price:9000},
    {id:8, name:"Joggin Blanco",categoria:"Ropa", Image:"/img/jogginBlanco.png",detail:"Joggin color Blanco" ,price:17000},
    {id:9, name:"Joggin Negro",categoria:"Ropa", Image:"/img/jogginNegro.png",detail:"Joggin color Negro" ,price:17000},
    {id:10, name:"Remera Oversize",categoria:"Ropa", Image:"/img/remeraOver.png",detail:"Remera blanca Oversize" ,price:9000},
    {id:11, name:"Saco Peluche",categoria:"Ropa", Image:"/img/sacoPeluche.png",detail:"Saco de peluche color marron" ,price:25000},
    {id:12, name:"SueterPolo",categoria:"Ropa", Image:"/img/sueterPolo.png",detail:"Sueter Polo" ,price:16000},
    {id:13, name:"Zapatillas Blancas",categoria:"Calzado", Image:"/img/zapatillasBlancas.png",detail:"Zapatillas Blancas" ,price:30000},
    {id:14, name:"Zapatillas Negras",categoria:"Calzado", Image:"/img/zapatillasNegras.png",detail:"Zapatillas Negras" ,price:30000},
    {id:16, name:"Collar Negro",categoria:"Accesorio", Image:"/img/collarNegro.png",detail:"Collar perla negra" ,price:4000},
    {id:17, name:"Funda Mariposa",categoria:"Accesorio", Image:"/img/fundaButterfly.png",detail:"Funda celular mariposa" ,price:5000},
    {id:18, name:"Funda Dragon",categoria:"Accesorio", Image:"/img/fundaDragon.png",detail:"Funda celular dragon" ,price:5000},
    {id:19, name:"Gorra Vintage",categoria:"Accesorio", Image:"/img/gorraBlanca.png",detail:"Gorra Blanca Vintage" ,price:8000},
    {id:20, name:"Pulsera",categoria:"Accesorio", Image:"/img/pulsera.png",detail:"Pulsera Plateada" ,price:4000},
]


const ItemListConteiner = () =>{
    const [data, setData] = useState([]);
    const {categoriaId} = useParams();
    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(NuevoArray)
            }, 1000);
        })
        if (categoriaId) {
            getData.then(res => setData(res.filter(NuevoArray => NuevoArray.categoria === categoriaId)));
        } else {
        getData.then(res => setData(res));
        }
    }, [categoriaId])
    


    return(
        <div className="main">
            <ItemList data={data}/>
        </div>
        )
}

export default ItemListConteiner
