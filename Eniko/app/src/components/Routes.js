import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import LoginFail from './LoginFail';
import App from './App';
import Details from './Details.jsx';
import Cart from './Cart.jsx';
import NotFound404 from './NotFound404';
import '../css/App.css';

const Routes = () => {

  return (
    <Router>
        <Switch>
        <Route path='/' exact component={Login} />
            <Route path='/home' component={App} />
            <Route path='/loginFail' component={LoginFail} />
            <Route path='/productInfo' component={Details} />
            <Route path='/cart' component={Cart} />
            <Route component={NotFound404}/>
        </Switch>
    </Router>
  )
}

export default Routes;
