import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home'
import Generate from './Generate'
import Decode from './Decode'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
          <Route exact path="/generate" component={Generate} />
            <Route exact path="/decode" component={Decode} />
            <Route path="/" component={Home} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
