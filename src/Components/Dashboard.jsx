import "../styles/Dashboard.css"; 
import SearchBar from "./SearchBar.jsx";
import VenuesGrid from "./VenuesGrid.jsx";
import Navigation from "./Navigation.jsx"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Dashboard() {
  return (
    // needs header
    <Router>
      <SearchBar />
      <Navigation />
      <Routes>
        <Route path="/:tag" element={<VenuesGrid />} />
        <Route path="/" element={<VenuesGrid />} />
      </Routes>
    </Router>
    // needs footer
  );
}
