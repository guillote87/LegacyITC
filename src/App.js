import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin';

function App() {
  return (
      <Router   basename ="/LegacyITC">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} />
        </Switch>
      </Router>
  );
}

export default App;
