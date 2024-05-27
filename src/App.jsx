import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AddMoviePage from "./pages/AddMoviePage";
import MovieListPage from "./pages/MovieListPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignInPage from "./pages/SignInPage";
import UpdateMoviePage from "./pages/UpdateMoviePage";
import Cookies from "js-cookie";
import axios from "axios";

const App = () => {
  const [token, setToken] = useState(Cookies.get("accessToken"));
  const [isAuth, setIsAuth] = useState(!!token);
  const refreshToken = Cookies.get("refreshToken");

  useEffect(() => {
    const refreshLogin = async () => {
      if (!token && refreshToken) {
        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/api/user/refresh-token`,
            { refreshToken },
            { withCredentials: true }
          );
          Cookies.set("accessToken", response.data.accessToken, {
            expires: new Date(new Date().getTime() + 60 * 60 * 1000),
          });
          Cookies.set("refreshToken", response.data.newRefreshToken, {
            expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          });
          setToken(response.data.accessToken);
          setIsAuth(true);
        } catch (error) {
          console.log(error);
          setIsAuth(false);
        }
      }
    };

    refreshLogin();
  }, [token, refreshToken]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<SignInPage />} />
          <Route
            path="/movie-list"
            element={isAuth ? <MovieListPage /> : <SignInPage />}
          />
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
