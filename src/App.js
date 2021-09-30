import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reastruants from './components/Restrurants/Reastruants';
import NotFound from './components/NotFound/NotFound';
import FoodDetails from './components/FoodDetails/FoodDetails';
import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <HeroSection></HeroSection>
          </Route>
          <Route exact path="/">
            <HeroSection></HeroSection>
          </Route>
          <Route path="/restrurants">
            <Reastruants></Reastruants>
          </Route>
          <Route path="/food/:foodId">
            <FoodDetails></FoodDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
