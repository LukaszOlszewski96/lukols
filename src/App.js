import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import underConstruction from './underConstruction/underConstruction';
import Home from "../src/Page/Home/Home";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
</Router>
  );
}

export default App;
