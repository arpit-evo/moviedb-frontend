import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AddMoviePage from "./pages/AddMoviePage";
import MovieListPage from "./pages/MovieListPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import UpdateMoviePage from "./pages/UpdateMoviePage";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Navigate to="/movie-list" />} />
            <Route index path="/movie-list" element={<MovieListPage />} />
            <Route path="/add" element={<AddMoviePage />} />
            <Route path="/edit/:id" element={<UpdateMoviePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/sign-in" element={<SignInPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
