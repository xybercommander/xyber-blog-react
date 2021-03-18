import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState('Xyber');
    const handleClick = () => {
        setName('Samrat')
    }

    const [counter, setCounter] = useState(0);
    const counterIncrement = () => {
        setCounter(counter + 1);
    }

    
    return (        
        <div className="home">
            <h2>Homepage</h2>            
            <p>{ name }</p>            
            <button onClick={ handleClick }>Click Me</button>            
            <h3>CLicked { counter } times</h3>
            <button onClick={ counterIncrement }>Press</button>
        </div>
    );
}
 
export default Home;   