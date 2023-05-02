import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstLandingPage from './components/1st-landing-page/FirstLandingPage';
import SecondLandingPage from './components/2nd-landing-page/SecondLandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FirstLandingPage} />
        <Route
          path="/2nd-landing-page"
          render={(props) => <SecondLandingPage {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;