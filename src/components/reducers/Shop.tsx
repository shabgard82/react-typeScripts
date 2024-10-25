import { useReducer, useState } from "react";

type ItemType = {
  value: string;
  id: number;
};

type stateType = {
  Item: ItemType[];
};

type ActionType =
  | { type: "ADD_ITEM"; payload: ItemType }
  | { type: "DELETE_ITEM"; payload: number };

export default function ShopList() {
  const initialState = { Item: [] };
  const [value, setValue] = useState<string>("");
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: stateType, action: ActionType) {
    switch (action.type) {
      case "ADD_ITEM":
        return { Item: [...state.Item, action.payload] };
      case "DELETE_ITEM":
        return {
          Item: state.Item.filter((item) => item.id !== action.payload),
        };

      default:
        return state;
    }
  }

  const handleAddItem = () => {
    const newItem = { id: Date.now(), value };
    dispatch({
      type: "ADD_ITEM",
      payload: newItem,
    });

    setValue("");
  };

  return (
    <div>
      <h2>Shop List</h2>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        value={value}
        placeholder="add items.."
      />

      <button onClick={handleAddItem}>ADD list</button>

      <ul>
        {state?.Item?.map((item) => (
          <li key={item.id}>
            {item.value}
            <button
              onClick={() =>
                dispatch({ type: "DELETE_ITEM", payload: item.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
