import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Accueil from "./pages/Accueil";
import NosActions from "./pages/NosActions";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";

import Education from "./pages/secteurs/Education";
import Gouvernance from "./pages/secteurs/Gouvernance";
import ProtectionSociale from "./pages/secteurs/ProtectionSociale";
import SanteNutrition from "./pages/secteurs/SanteNutrition";
import Environnement from "./pages/secteurs/Environnement";
import Decentralisation from "./pages/secteurs/Decentralisation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />

          <Route path="/actions" element={<NosActions />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />

          {/* Secteurs d'intervention */}
          <Route path="/secteurs/education" element={<Education />} />
          <Route path="/secteurs/gouvernance" element={<Gouvernance />} />
          <Route
            path="/secteurs/protection-sociale"
            element={<ProtectionSociale />}
          />
          <Route
            path="/secteurs/sante-nutrition"
            element={<SanteNutrition />}
          />
          <Route
            path="/secteurs/environnement"
            element={<Environnement />}
          />
          <Route
            path="/secteurs/decentralisation"
            element={<Decentralisation />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;