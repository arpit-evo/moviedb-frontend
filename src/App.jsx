import Cookies from "js-cookie";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AddMoviePage from "./pages/AddMoviePage";
import MovieListPage from "./pages/MovieListPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import UpdateMoviePage from "./pages/UpdateMoviePage";
import { useEffect } from "react";

const App = () => {
  const [token, setToken] = useState(Cookies.get("refreshToken"));
  const [isAuth, setIsAuth] = useState(!!token);
  const refreshToken = () => {
    setIsAuth(Cookies.get("refreshToken"));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              isAuth ? (
                <MovieListPage />
              ) : (
                <SignInPage refreshAuth={refreshToken} />
              )
            }
          />
          <Route
            path="/movie-list"
            element={
              isAuth ? (
                <MovieListPage />
              ) : (
                <SignInPage refreshAuth={refreshToken} />
              )
            }
          />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route
            path="/add"
            element={isAuth ? <AddMoviePage /> : <SignInPage />}
          />
          <Route
            path="/edit/:id"
            element={isAuth ? <UpdateMoviePage /> : <SignInPage />}
          />
          <Route
            path="*"
            element={isAuth ? <NotFoundPage /> : <SignInPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
