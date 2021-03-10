import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import underConstruction from './underConstruction/underConstruction';
import Navbar from './Components/Navbar/Navbar';
import Home from './Page/Home/Home';
import AboutMe from './Page/AboutMe/AboutMe';
import Portfolio from './Page/Portfolio/Portfolio';
import Skill from './Page/Skill/Skill';
import Contact from './Page/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skill/>
      <Portfolio/>
      <Route>
        <Router path='/' component={Contact}/>
      </Route>
</Router>
  );
}

export default App;
