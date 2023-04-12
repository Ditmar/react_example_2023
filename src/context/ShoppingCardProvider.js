import shoppingCardReducer from '../reducers/ShoppingReducer';
import { ShoppingCardContext } from './ShoppingCardContext';
import { useReducer } from 'react';
const initState = {

    total: 0,
    shoppingCard: ['picachu'],
}
const ShoppingCardProvider = ({children}) => {
    const [state, dispatch] = useReducer(shoppingCardReducer, initState);
    return (
        <ShoppingCardContext.Provider value={{state, dispatch}}>
            {children}
        </ShoppingCardContext.Provider>
    )
}
export default ShoppingCardProvider;