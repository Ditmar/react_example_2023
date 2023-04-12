import { useContext, useState } from "react";
import { ShoppingCardContext } from "../../../context/ShoppingCardContext";

const ShoppingCard = (props) => {
    //const [list, setList] = useState(['test 1', 'test 2']);
    const { state, dispatch } =  useContext(ShoppingCardContext);
    const {shoppingCard} = state;
    return (
        <div className="shopping-card">
        <h2>Shopping Card</h2>
            {
                shoppingCard.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default ShoppingCard;