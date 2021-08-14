import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css"
import Footer from "./components/Footer"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"
function App() {
  return (
    <div className="App">
      <Router> 
          <Navbar />
      
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route Path= "/contact" component={Contact}/>
          </Switch>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
