import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Driver from "./pages/driver/Driver";
import Layout from "./components/layout/Layout";
import Vehicle from "./pages/vehicles/Vehicle";
import Equipment from "./pages/equipments/Equipment";
//import Form from "./pages/driver/Formd";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/equipment" element={<Equipment />} />
      </Route>
    </Routes>
  );
}

export default App;
