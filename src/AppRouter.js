import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutMePage } from "./components/AboutMePage";
import { ContactMePage } from "./components/ContactMePage";
import { HeroSectionPage } from "./components/HeroSectionPage";
import { AsideComponent } from "./components/AsideComponent";
import { Projects } from "./components/Projects";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <AsideComponent />
        <Switch>
          <Route exact path="/" component={HeroSectionPage} />
          <Route exact path="/about" component={AboutMePage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={ContactMePage} />
        </Switch>
      </div>
    </Router>
  );
};
