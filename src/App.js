import { useEffect } from "react";
import Table from "./components/Table";
import { data } from "./data";
import useDataStore from "./stores/DataStore";
import "./styles.css";

const App = () => {
  const { makeDataUsable } = useDataStore();

  useEffect(() => {
    makeDataUsable(data);
  }, []);

  return (
    <div>
      <Table />
    </div>
  );
};

export default App;
