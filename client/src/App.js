import {Routes, Route} from "react-router-dom"
import { PostList } from "./components/PostList";

function App() {
  return
  <div className="container">
    <Routes>
      <Route path = "/" element= {<PostList />} />
      <Route path = "/posts/:id" element= {<h1>Post</h1>} />
    </Routes>
  </div>
  return (
    <PostList />
  );
}


export default App;
