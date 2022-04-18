import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Infos from "./components/infos/Infos";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import MentionsLegales from "./components/footer/MentionsLegales";

// comment faire de l'import dynamique
// Si un composant est trop lourd au chargement:
// const Souffleur = React.lazy(() => import("./components/services/Souffleur"));
// ensuite il faut utiliser la balise <Suspense></Suspense>
// url explicative:
// https://amolbkgunjal.medium.com/react-lazy-a34517190d4d

function App() {
  const [data, setDatas] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("/servicesData.json");
      const data = await res.json();
      setDatas(data);
    })();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar services={data?.details} />
        <main>
          {/* <Suspense fallback={ici le composant montrer pendant le chargement}> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/services"
              element={<Services services={data?.details} />}
            />
            <Route path="/infos" element={<Infos />} />
            <Route path="/mentionsLegales" element={<MentionsLegales />} />
            <Route path="*" element={<Home />} />
          </Routes>
          {/* </Suspense> */}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
