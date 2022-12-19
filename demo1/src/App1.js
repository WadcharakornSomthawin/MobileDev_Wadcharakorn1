import './App.css';
import Post from "./Post";
import { PostFunction } from "./PostFunction";

function App() {
  return (
    <div className="root">
      <div className="App">
        <Post content= "This is a class Component" name="Wadcharakorn Somthawin" />
        <Post content = "Component" name = "Wadcharakorn" />
        <PostFunction 
          content = "This is a Function Component"
          name = "Wadcharakorn Somthawin" />
        

      </div>
      <Post />
    </div>
  );
}

export default App;
