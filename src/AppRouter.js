import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AboutMePage } from "./components/AboutMePage";
import { ContactMePage } from "./components/ContactMePage";
import { BlogPage } from "./components/BlogPage";
import { Home } from "./components/Home";
import { HeroSectionPage } from "./components/HeroSectionPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HeroSectionPage} />
          <Route exact path="/about" component={AboutMePage} />
          <Route exact path="/contact" component={ContactMePage} />
          <Route exact path="/blog" component={BlogPage} />
        </Switch>
      </div>
    </Router>
  );
};
