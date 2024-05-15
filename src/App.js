import "./App.css";
import Home from "./Pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NavLayout from "./Components/NavLayout";
import PostDetails from "./Pages/PostDetails";
import AddNewPost from "./Pages/AddNewPost";
import DeletePost from "./Pages/DeletePost";
import UpdatePost from "./Pages/UpdatePost";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug/:id" element={<PostDetails />} />
        <Route path="/add-new-post" element={<AddNewPost />} />
        <Route path="/delete-post" element={<DeletePost />} />
        <Route path="/update-post/:id" element={<UpdatePost />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
