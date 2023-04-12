import { ShoppingCardContext } from '../../../../context/ShoppingCardContext';
import { Types } from '../../../../types/types';
import { useContext } from 'react';
import './styles.css';
const Item = props => {
    const { name, url, id} = props;
    const { dispatch, state } = useContext(ShoppingCardContext);

    const handlerClick = (name) => {
        dispatch({type: Types.ADD_TO_CARD, payload: {product: name}}, state)
    }
    return <div className="item">
        <img  alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}>
        </img>
        <p>{name}</p>
        <button onClick={() => {handlerClick(name)}}>Comprar</button>
    </div>
};
export default Item;