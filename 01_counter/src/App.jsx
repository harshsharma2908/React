import { useState } from "react";
import "./App.css";

function App() {
    let [counter, setCounter] = useState(0);

    const increaseCountValue = () => {
        setCounter(counter + 1 >= 0 ? counter + 1 : counter);
    };

    const decreaseCountValue = () => {
        setCounter(counter - 1 >= 0 ? counter - 1 : counter);
    };

    return (
        <>
            <h1>Counter App React</h1>
            <h2>Counter Value: {counter}</h2>
            <button onClick={increaseCountValue}>Increase Count</button>
            <button onClick={decreaseCountValue}>Decrease Count</button>
        </>
    );
}

export default App;
