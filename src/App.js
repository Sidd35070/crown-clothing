
import './App.css';
import { Homepage } from './pages/homepage';
import Shop from './pages/shop.component';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Header } from './components/header/header.component';

function App() {
  
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/" component={Homepage} ></Route>
      <Route exact path="/shop" component={Shop} ></Route>
    </Switch>
    </div>
    
  );
}

export default App;
