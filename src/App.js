import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Tondeuse from "./components/services/Tondeuse";
import TondeuseAutoPortee from "./components/services/TondeuseAutoPortee";
import Debrouissailleuse from "./components/services/Debroussailleuse";
import Motoculteur from "./components/services/Motoculteur";
import GroupeElectrogene from "./components/services/GroupeElectrogene";
import TailleHaie from "./components/services/TailleHaie";
import Souffleur from "./components/services/Souffleur";
import Infos from "./components/infos/infos";

// comment faire de l'import dynamique
// Si un composant est trop lourd au chargement:
// const Souffleur = React.lazy(() => import("./components/services/Souffleur"));
// ensuite il faut utiliser la balise <Suspense></Suspense>
// url explicative:
// https://amolbkgunjal.medium.com/react-lazy-a34517190d4d

function App() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Navbar />
          <main>
            {/* <Suspense fallback={ici le composant montrer pendant le chargement}> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tondeuse" element={<Tondeuse />} />
              <Route
                path="/tondeuse-auto-portee"
                element={<TondeuseAutoPortee />}
              />
              <Route path="/debroussailleuse" element={<Debrouissailleuse />} />
              <Route path="/motoculteur" element={<Motoculteur />} />
              <Route
                path="/groupe-electrogene"
                element={<GroupeElectrogene />}
              />
              <Route path="/taille-haie" element={<TailleHaie />} />
              <Route path="/souffleur" element={<Souffleur />} />
              <Route path="/infos" element={<Infos />} />
              <Route path="*" element={<Home />} />
            </Routes>
            {/* </Suspense> */}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
