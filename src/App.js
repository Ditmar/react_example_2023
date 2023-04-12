import React, { useState } from 'react';

//import Counter from './ui/components/Counter';
//import List from './ui/components/list';
import './styles.css';
import { List } from './ui/components/Pokemon/List';
import ShoppingCard from './ui/components/ShoppingCard';
import ShoppingCardProvider from './context/ShoppingCardProvider';
function App() {
  const [uri, setUri] = useState('');
  const clickHandler = (url) => {
    setUri(url);
    //console.log(`url to send ${uri}`);
  };
  return (
    <ShoppingCardProvider>

      <div className="container">
        <List />
        <ShoppingCard />
      </div>

    </ShoppingCardProvider>
  );
}

export default App;
