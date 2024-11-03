import { useTheme } from "./context";

export default function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      <h1 className="bg-yellow">
        {theme === "dark" ? "حالت تیره" : "حالت روشن "}
      </h1>
      <p>change theme please !!!</p>
      <button onClick={toggleTheme}>change theme</button>
    </div>
  );
}
