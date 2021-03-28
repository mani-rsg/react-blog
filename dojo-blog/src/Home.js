import {useState} from 'react';
const Home = () => {
    // let name = 'Bala';
    // let age = 22;
    const [name, setName] = useState('Mani');
    const [age, setAge] = useState(21);

    const handleClick = (name, age, event) => {
        console.log(name, age, event);
        setName(name);
        setAge(age);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={(event) => handleClick('Bala', 22, event)}>click me</button>
        </div>
    );
}

export default Home;