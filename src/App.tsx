import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PersonalLoanPage from "./pages/PersonalLoanPage";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Suspense fallback={<div className="p-10 text-white">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/loans/personal-loan"
              element={<PersonalLoanPage />}
            />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
