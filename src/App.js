import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  GalleryPage,
  LandingPage,
  PostsPage,
  ProfilePage,
  TodoPage,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:userId" element={<ProfilePage />} />
        <Route path="/:userId/posts" element={<PostsPage />} />
        <Route path="/:userId/gallery" element={<GalleryPage />} />
        <Route path="/:userId/todos" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
