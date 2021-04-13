import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import underConstruction from './underConstruction/underConstruction';
import Navbar from './Components/Navbar/Navbar';
import Home from './Page/Home/Home';
import AboutMe from './Page/AboutMe/AboutMe';
import Portfolio from './Page/Portfolio/Portfolio';
import Skill from './Page/Skill/Skill';
import Contact from './Page/Contact/Contact';
import MoreInfo from './Page/Portfolio/moreInfo/MoreInfo';
import MoreInfoUnien from './Page/Portfolio/moreInfo/MoreInfoUnien';
import MoreInfoPupil from './Page/Portfolio/moreInfo/MoreInfoPupil';

function App() {


  return (
    <Router>
      <Switch>
          <Route path="/lukols-more" component={MoreInfo}/>
          <Route path="/unien-more" component={MoreInfoUnien}/>
          <Route path="/pupil-more" component={MoreInfoPupil}/>
      </Switch>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skill/>
      <Portfolio/>
      <Contact/>
  </Router>
  );
}

export default App;
