import { Types } from "../types/types";

const shoppingCardReducer = (state, action) => {
    const {type, payload} = action;
    console.log('state', state);
    switch (type) {
        case Types.ADD_TO_CARD: {
            const {product} = payload;
            const {shoppingCard} = state;
            const newShoppingCard = [...shoppingCard, product];
            return {
                ...state,
                shoppingCard: newShoppingCard,
            };
        }
        case Types.REMOVE_FROM_CARD: { 
            const {product} = payload;
            const {shoppingCard} = state;
            const newShoppingCard = shoppingCard.filter((item) => item.id !== product.id);
            return {
                ...state,
                shoppingCard: newShoppingCard,
            }
        }
    }
}
export default shoppingCardReducer;