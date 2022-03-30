import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Tondeuse from "./components/Tondeuse";
import TondeuseAutoPortee from "./components/TondeuseAutoPortee";
import Debrouisailleuse from "./components/Debrouisailleuse";
import Motoculteur from "./components/Motoculteur";
import GroupeElectrogene from "./components/GroupeElectrogene";
import TailleHaie from "./components/TailleHaie";
import Souffleur from "./components/Souffleur";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tondeuse" element={<Tondeuse />} />
            <Route
              path="/tondeuse-auto-portee"
              element={<TondeuseAutoPortee />}
            />
            <Route path="/debrousailleuse" element={<Debrouisailleuse />} />
            <Route path="/motoculteur" element={<Motoculteur />} />
            <Route path="/groupe-electrogene" element={<GroupeElectrogene />} />
            <Route path="/taille-haie" element={<TailleHaie />} />
            <Route path="/souffleur" element={<Souffleur />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
