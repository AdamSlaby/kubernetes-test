import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Fib Calculator version 2</h1>
            <Link to="/">Home</Link>
            <Link to="otherPage">Other Page</Link>
          </header>
          <div>
              <Route exact path="/" component={Fib}/>
              <Route path="/otherPage" component={OtherPage}/>
          </div>
        </div>
    </Router>
  );
}

export default App;
