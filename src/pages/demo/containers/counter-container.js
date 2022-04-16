import React, { useCallback, useState, useMemo } from "react";
import Counter from "../views/counter";

const CounterContainer = () => {
    const [localState, setLocalState] = useState(0);
    const [counterState, setCounterState] = useState(0);
    const [input, setInput] = useState(0);
    
    // The first argument is the function that we need to memoize.
    // The second argument is a dependency array which is similar 
    // to the useEffect() hook’s dependency array, we never want 
    // the function to change, so we pass in an empty dependency array.
    const memoizedCallback = useCallback(        
        (state) => incrementCounterState(state), []
    );

    const incrementCounterState = (number) => setCounterState(number);

    const increment = () => setLocalState(localState + 1);

    const memoizedValue = useMemo(() => getLargestNumber(), []);

    const memoizedInput = useMemo(()=> memoizeInput(input), [input]);
    
    function getLargestNumber() {
        console.log("from getLargestNumber");
        const arr = [1, 5, 9, 5, 55, 24, 53, 12, 456, 4556];
        return Math.max(...arr);
    }

    function memoizeInput(input) {
        console.log("from memoizeInput");
        return input;
    }

    function handleInput(evt) {
        return evt.target.value;
    }

    return (
        <div>
            <h2>This is a demostration of memoized Callback with useCallback and useMemo</h2>
            <Counter 
                number={counterState} 
                setNumber={memoizedCallback}
            />            
            <h3>Counter at container: {localState}</h3>
            <i>*It will not be forced to re-render at the child component</i><br/>
            <button onClick={increment}>Up</button>
            <br/>
            <span>This memoized function's returned value will not be re-rendered by changes of counters</span>
            <h2>{memoizedValue}</h2>
            <div>
                <input onChange={(evt) => setInput(handleInput(evt))} />
                <br/>
                <span>This memoized input value will not be re-rendered by changes of counters</span>
                <h2> {memoizedInput} </h2>
            </div>
        </div>
    );
}

export default CounterContainer;