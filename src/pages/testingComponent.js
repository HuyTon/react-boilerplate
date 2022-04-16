import React from 'react';
import axios from 'axios';

export const dataReducer = (state, action) => {
  if (action.type === 'SET_ERROR') {
    return { ...state, list: [], error: true };
  }

  if (action.type === 'SET_LIST') {
    return { ...state, list: action.list, error: null };
  }

  throw new Error();
};

const initialData = {
  list: [],
  error: null,
};

const TestingComponent = () => {
  const [counter, setCounter] = React.useState(0);
  const [data, dispatch] = React.useReducer(dataReducer, initialData);

  React.useEffect(() => {
    axios
      .get('http://hn.algolia.com/api/v1/search?query=react')
      .then(response => {
        dispatch({ type: 'SET_LIST', list: response.data.hits });
      })
      .catch(() => {
        dispatch({ type: 'SET_ERROR' });
      });
  }, []);

  return (
    <div>
      <h1>My Counter</h1>
      <h4><i>This page use for testing purpose only with React and Enzyme for async testing. The simple counter component just for illustration purpose how to perform unit testing with Jest framework and enzyme.</i></h4>
      <Counter counter={counter} />

      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <button type="button" onClick={() => setCounter(counter - 1)} className="ml-1">
        Decrement
      </button>

      <h2>My Async Data</h2>

      {data.error && <div className="error">Error</div>}

      <ul>
        {data.list.map(item => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export const Counter = ({ counter }) => (
  <div>
    <p>{counter}</p>
  </div>
);

export default TestingComponent;