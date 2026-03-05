import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import SelectMovie from "./pages/SelectMovie";
import "./App.css";
import SeatsPage from "./pages/SeatsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<SelectMovie />} />
        <Route path="movie/:id/seats/:id" element={<SeatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
