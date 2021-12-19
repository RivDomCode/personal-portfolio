import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutMePage } from "./components/AboutMePage";
import { AsideComponent } from "./components/AsideComponent";
import { LandingPages } from "./components/LandingPages";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Error404 } from "./components/Error404";



export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <AsideComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMePage} />
          <Route exact path="/landing" component={LandingPages} />
          <Route exact path="*" component={Error404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
