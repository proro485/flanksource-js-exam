import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Team from "./pages/Team";

import { data } from "./data";
import useDataStore from "./stores/DataStore";

import "./styles.css";

const App = () => {
  const { makeDataUsable } = useDataStore();

  useEffect(() => {
    makeDataUsable(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams/:id" element={<Team />} />
        <Route
          path="*"
          element={
            <div className="center">
              <h2>404 | Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
