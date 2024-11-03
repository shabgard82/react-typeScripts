// import Counter from "./components/reducers/Counter";
// import ShopList from "./components/reducers/Shop";
// import Select from "./components/state/Select";

import ChangeTheme from "./components/contextHook/ChangeTheme";
import { ThemeProvider } from "./components/contextHook/context";

function App() {
  return (
    <>
      {/* <Counter />
      <ShopList />

      <Select /> */}
      <ThemeProvider>
        <ChangeTheme />
      </ThemeProvider>
    </>
  );
}

export default App;
