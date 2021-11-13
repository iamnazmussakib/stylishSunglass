import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthContext from './Context/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Sunglasses from './pages/Sunglasses/Sunglasses/Sunglasses';

function App() {
  return (
    <AuthContext>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/sunglasses/:sunglassId">
            <SingleProduct></SingleProduct>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/sunglasses">
            <Sunglasses></Sunglasses>
          </Route>
        </Switch>
      </Router>
    </AuthContext>
  );
}

export default App;
