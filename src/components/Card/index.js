import "./card.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Card = (props) => {
    const {nombre, foto, puesto, id, fav} = props.datos;
    const {colorPrincipal, eliminarColaborador, like} = props;

    return <div className="card__container" style={{backgroundImage:`linear-gradient(${colorPrincipal} 35%, #fff 35%)`}}>
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className="close__icon"/>
        <h3 className="card__title">{nombre} </h3>
        <p className="text">{puesto}</p>
        <img src={foto} alt="perfil del instructor de alura"/>
        {fav? <AiFillHeart className="like" color="red" onClick={()=>like(id)}/>: <AiOutlineHeart className="like" onClick={()=>like(id)}/>} 
    </div>
}

export default Card;