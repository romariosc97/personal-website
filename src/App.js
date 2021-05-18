import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';
import Portfolio from './views/Portfolio';
import Blog from './views/Blog';
import Error404 from './views/Error404';
import './assets/css/Main.css';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
        
    </Router>
  );
}

export default App;
