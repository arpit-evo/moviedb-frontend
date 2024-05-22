import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import MainLayout from "./layout/MainLayout";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<SignInPage/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
