import Body from './components/body/Body';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './components/cart/Cart'
import Header from './components/header/Header';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route exact path ="/">
        <Body/>
        </Route>
        <Route path = "/cart">
          <Cart/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
