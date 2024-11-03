import { useState } from "react";

interface dataType {
  components: string;
  jsx: string;
  props: string;
  state: string;
}

export default function Select() {
  const data: dataType = {
    components: "Components are independent, reusable pieces of UI in React.",
    jsx: "JSX is a syntax extension for JavaScript, allowing us to write HTML-like code in React.",
    props:
      "Props are inputs to components. They allow data to be passed from one component to another.",
    state:
      "State is a special object in React components that holds dynamic data and affects the component's behavior or appearance.",
  };

  const [selected, setSelected] = useState<keyof dataType>("components");

  const handleClick = (selected: keyof dataType) => {
    setSelected(selected);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#03b1fc",
          borderRadius: "10px",
        }}
      >
        <p onClick={() => handleClick("components")} style={{ padding: "5px" }}>
          components
        </p>
        <p onClick={() => handleClick("jsx")} style={{ padding: "5px" }}>
          jsx
        </p>
        <p onClick={() => handleClick("props")} style={{ padding: "5px" }}>
          props
        </p>
        <p onClick={() => handleClick("state")} style={{ padding: "5px" }}>
          state
        </p>
      </div>

      <div>{data[selected]}</div>
    </div>
  );
}
