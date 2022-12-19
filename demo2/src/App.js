import Post from "./Post"
import Comment from "./Comment"
import Card from "./Card"
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <Post userId="Dek_SE" message="Yeah, I got a grade A in Modile Programming">
          <Comment userId="Wadcharakorn_SE" message="Wow, it's wonderfull"/>
          <Comment userId="Mr.Unkhown" message = "Congratulation !"/>
      </Post>

      <Card/>
      
    </div>
  );
}

export default App;
