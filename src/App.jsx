import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AddMoviePage from "./pages/AddMoviePage";
import MovieListPage from "./pages/MovieListPage";
import SignInPage from "./pages/SignInPage";
import UpdateMoviePage from "./pages/UpdateMoviePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<SignInPage />} />
          <Route path="/movie-list" element={<MovieListPage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
          <Route path="/update-movie" element={<UpdateMoviePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
