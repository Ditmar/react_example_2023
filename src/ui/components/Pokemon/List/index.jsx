import { useEffect } from "react";
import useFetch from "../../../../hooks/useFetch"
import Item from "../Item";
import './styles.css';

export const List = () => {
    
    const {data, request, loading, error} = useFetch();
    useEffect(() => {
        console.log('call data');
        request('https://pokeapi.co/api/v2/pokemon/', {method: 'GET'});
    }, []);
    return <div className="item__wrapper">
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {data && data.results.map((item, index) => (
            <Item key={index} name={item.name} url={item.url} id={item.url.match(/\d+/g)[1]}/>
        ))}
    </div>
}