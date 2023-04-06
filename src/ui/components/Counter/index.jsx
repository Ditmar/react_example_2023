import { useState } from 'react';
import './styles.css';
const Counter = () => {
    console.log('el componente se carga')
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return <div className='wrapper'>
        <h2>Counter</h2>
        <img src={`https://avatars.dicebear.com/api/open-peeps/stefan${count}.svg`} />
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
}
export default Counter;