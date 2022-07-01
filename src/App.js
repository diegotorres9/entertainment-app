import './App.css';
import Header from "./components/Header";
// import Home from "./components/Home";
import Router from "./components/Router";
import Searchbar from "./components/Searchbar";
function App() {
  return (
    <div className="App">
    <Header />
    <Searchbar />
    <Router />
    </div>
  );
}

export default App;
