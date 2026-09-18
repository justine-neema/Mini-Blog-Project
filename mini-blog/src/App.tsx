import Header from "./Components/Header/Header";
import PostList from "./Components/PostList/PostList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <PostList />
      </main>
    </div>
  );
}

export default App;