import { useEffect } from "react";
import { data } from "./data";
import useDataStore from "./stores/DataStore";
import "./styles.css";

const App = () => {
  const { makeDataUsable } = useDataStore();

  useEffect(() => {
    makeDataUsable(data);
  }, []);

  return <div>App</div>;
};

export default App;
