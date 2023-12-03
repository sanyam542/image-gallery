import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { Context } from "./components/context/Context";
import Banner from "./components/Banner/Banner";
import { useContext } from "react";

function App() {
  const queryContext = useContext(Context);

  return (
    <div className="app transition-colors duration-1000 w-full	">
      <Header></Header>
      <Banner></Banner>
      <Card query={queryContext.keyword}></Card>
    </div>
  );
}

export default App;
