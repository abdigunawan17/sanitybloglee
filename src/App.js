import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Post from "./components/Post";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/post/:slug" exact element={<SinglePost />} />
          <Route path="/post" exact element={<Post />} />
          <Route path="/project" exact element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
