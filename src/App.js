import React, {useState} from 'react';
import './App.css';
import HailstoneNumber from './HailstoneNumber'

function make(clickHandler, selected) {
    const arr = [];

    for (let i = 2; i < 158; i++) {
        arr.push(<HailstoneNumber key={i} selected={selected === i} clickHandler={clickHandler} n={i}/>)
    }

    return arr;
}

function App() {
    const [fullScreen, setFullScreen] = useState(null);
    const clickHandler = n => setFullScreen(n === fullScreen ? null : n);

    return (
        <div className="App">
            {make(clickHandler, fullScreen)}
        </div>
    );
}

export default App;
