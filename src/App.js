import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./fireBaseConfig";

import PostsContext from "./Context";

import "./App.css";

import Navbar from "./component/Navbar";
import Register from "./pages/register";
import Home from "./pages/Home";
import Login from "./pages/login";
import Details from "./pages/DetailsPost";
import Notfound from "./pages/NotFound";
import SavePosts from "./pages/SavePosts";
import Watches from "./pages/Watches";
import ButtonToScrollUp from "./component/buttonScrollUp";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Product from "./test";
import About from "./pages/About";
import Skills from "./pages/Skills";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postRef = collection(db, "Blog");
    const q = query(postRef, orderBy("Date", "desc"));
    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(posts);
      console.log(posts);
    });
  }, []);

  // const handelerSavePost = (postId) => {
  //   let newPosts = [...posts];
  //   let index = newPosts.findIndex((el) => el.id === postId);
  //   newPosts[index].isSaved = !newPosts[index].isSaved;
  //   setPosts(newPosts);
  // console.log(newPosts);
  // setPosts(newPosts);

  // setSaveState(newPosts[index].isSaved);
  // };

  return (
    <Router>
      <Navbar />
      <PostsContext.Provider value={[posts]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/saveposts" element={<SavePosts />} />
          <Route path="/watches" element={<Watches />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </PostsContext.Provider>
      <ButtonToScrollUp />
    </Router>
  );
}

export default App;
