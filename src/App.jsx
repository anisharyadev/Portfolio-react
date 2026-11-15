import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext"; // Added
import PublicLayout from "./layouts/PublicLayout";
import ScrollToTop from "./components/ui/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import NotFound from "./pages/NotFound";

// Admin Imports
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";

export default function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* =========================================
                PUBLIC ROUTES (Wrapped in PublicLayout)
                ========================================= */}
            <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
            <Route path="/portfolio" element={<PublicLayout><Portfolio /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
            <Route path="/thank-you" element={<PublicLayout><ThankYou /></PublicLayout>} />
            <Route path="/terms" element={<PublicLayout><Terms /></PublicLayout>} />
            <Route path="/refund-policy" element={<PublicLayout><Refund /></PublicLayout>} />

            {/* =========================================
                ADMIN ROUTES (No Navbar/Footer)
                ========================================= */}
            <Route path="/hosting" element={<AdminLogin />} />
            <Route path="/host/dashboard" element={<AdminDashboard />} />

            {/* =========================================
                404 CATCH-ALL
                ========================================= */}
            <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </DataProvider>
  );
}