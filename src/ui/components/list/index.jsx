import React, { useState, useEffect } from 'react';
import './styles.css';
const generateAvatar = (list) => {
    const avatar = [];
    for (let i = 0; i < 10; i++) {
        const ramdom = Math.floor(Math.random() * 100);
        avatar.push(`https://avatars.dicebear.com/api/bottts/stefan${ramdom}.svg`);
    }
    return avatar;
}
const List = props => {
    const { clickHandler } = props;
    const [list, setList] = useState([]);
    //setList(generateAvatar());
    useEffect(() => {
        setList(generateAvatar());
    }, []);
    return <div className='wrapper'>
        <h2>List</h2>
        <ul>
            {list.map((item, index) => (
                <li key={index} onClick={() => {
                    clickHandler(item);
                }}>
                    <img src={item} />
                </li>
            ))}
        </ul>
    </div>
}
export default List;