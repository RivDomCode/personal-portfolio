import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSectionPage } from "./components/HeroSectionPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ContactMePage } from "./components/ContactMePage";
import { BlogPage } from "./components/BlogPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HeroSectionPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactMePage} />
          <Route exact path="/blog" component={BlogPage} />
        </Switch>
      </div>
    </Router>
  );
};
