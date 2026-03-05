import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import SelectMovie from "./pages/SelectMovie";
import "./App.css";
function App() {
  const id = localStorage.getItem("id");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movies/id" element={<SelectMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
