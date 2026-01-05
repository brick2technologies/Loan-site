import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PersonalLoanPage from "./pages/PersonalLoanPage";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/personal-loan"
            element={<PersonalLoanPage />}
          />
        </Routes>

      </main>

      <Footer />
    </>
  );
}
