import { createContext } from "react";
import { useReducer } from "react";



export const CounterContext = createContext(
    {
        counter: 0,
        incrementCounter: () => { },
        decrementCounter: () => { },
        resetCounter: () => { },
    }
);

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 };
        case 'decrement':
            return { counter: state.counter - 1 };
        case 'reset':
            return { counter: 0 };
        default:
            throw new Error(`Unknown action: ${action.type}`);
    }
}


function CounterProvider({ children }) {

    const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

    const incrementCounter = () => {
        dispatch({ type: 'increment' });
    };

    const decrementCounter = () => {
        dispatch({ type: 'decrement' });
    };

    const resetCounter = () => {
        dispatch({ type: 'reset' });
    };

    const value =
    {
        counter: state.counter,
        incrementCounter,
        decrementCounter,
        resetCounter

    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
}
export default CounterProvider