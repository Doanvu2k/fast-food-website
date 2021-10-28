import { Suspense } from "react";
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import { PageTransition } from "@steveeeie/react-page-transition";
import Home from "features/Home";
import Footer from "components/Footer";
const Photo = React.lazy(() => import("./features/Photo"));
function App() {
  return (
    <div className="h-full">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/photos" component={Photo} />
          </Switch>

          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
