import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./components/home.jsx";
import { Events } from "./components/events.jsx";
import { Media } from "./components/media.jsx";
import { Contact } from "./components/contact.jsx";
import { About } from "./components/about.jsx";
import { Header } from "./components/partials/header.jsx";
import { Footer } from "./components/partials/footer.jsx";

export const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/home">
          <Redirect to="/" />
        </Route> */}
        <Route exact path="/events" component={Events} />
        <Route exact path="/media" component={Media} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
};
