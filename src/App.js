import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Article from "./components/Article";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog/">
          <Blog />
        </Route>
        <Route path="/contact/">
          <Contact />
        </Route>
        <Route path="/article/">
          <Article />
        </Route>
       
      </Switch>
    </Router>
      <Footer />
    </div>
  );
}

export default App;
