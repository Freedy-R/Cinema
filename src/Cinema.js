import Navbar from "./Components/Navbar";
import MoviesSection from "./Components/MoviesSection";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChoosenMovie from "./Components/ChoosenMovie";
const router = createBrowserRouter([
  {
    path: "Cinema/",
    element: <MoviesSection/>,
  },
  {
    path: "/Cinema/choosen",
    element: <ChoosenMovie/>,
  },
]);
function Cinema() {
  return (
    <section className="cinema">
      <Navbar></Navbar>
      <RouterProvider router={router}/>
    </section>
  );
}

export default Cinema;
