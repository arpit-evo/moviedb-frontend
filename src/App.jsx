import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MainLayout from "./layout/MainLayout";
import MovieList from "./pages/MovieList";
import AddMoviePage from "./pages/AddMoviePage";
import UpdateMoviePage from "./pages/UpdateMoviePage";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<SignInPage/>}/>
      <Route path="/movie-list" element={<MovieList/>}/>
      <Route path="/add-movie" element={<AddMoviePage/>}/>
      <Route path="/update-movie" element={<UpdateMoviePage/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
