// import Card from "./components/Card/Card";
import { createContext, useState } from "react";
import Header from "./components/Header/Header";
// import AppContext from "./components/Header/Header";

const themeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={(theme, setTheme)}>
      <div className="App ">
        <Header></Header>
      </div>
    </themeContext.Provider>
  );
}

export default App;
