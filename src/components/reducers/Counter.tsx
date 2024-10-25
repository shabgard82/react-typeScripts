import { useReducer } from "react";

const initialState = { count: 0 };

type CounterStateType = {
  count: number;
};

type actionType = {
  type: string;
  payload: number;
};

function reducer(state: CounterStateType, action: actionType) {
  switch (action.type) {
    case "increase":
      return { count: state.count + action.payload };
    case "decrease":
      if (state.count <= 0) return initialState;
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>count:{state.count}</div>
      <div>
        <button onClick={() => dispatch({ type: "increase", payload: 10 })}>
          increase
        </button>
        <button onClick={() => dispatch({ type: "decrease", payload: 10 })}>
          decrease
        </button>
      </div>
    </div>
  );
}
