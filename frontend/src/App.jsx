/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import LoginAdmin from "./pages/loginAdmin/LoginAdmin";
import Projets from "./pages/projets/Projets";
import LayoutWebsite from "./components/layout/LayoutWebsite";
import EspaceAdmin from "./pages/espaceAdmin/EspaceAdmin";
import LayoutAdmin from "./components/layout/LayoutAdmin";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route path="/home" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
        </Route>
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/espaceadmin" element={<LayoutAdmin />}>
          <Route path="/admin/espaceadmin" element={<EspaceAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
