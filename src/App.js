
import './App.css';
import { Homepage } from './pages/homepage';
import Shop from './pages/shop.component';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Homepage} ></Route>
      <Route exact path="/shop" component={Shop} ></Route>
    </Router>
  );
}

export default App;
