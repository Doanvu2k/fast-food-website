import { Suspense } from "react";
import { BrowserRouter,Redirect,Switch,Route} from "react-router-dom";
import Header from "./components/Header";
import Loading from "./components/Loading";
import React from "react";
const Photo = React.lazy(() => import('./features/Photo'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
