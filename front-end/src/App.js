import Header from './components/Header';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Form from './components/Form';
import UserDash from './components/UserDash'




function App() {
  return (
    <div className="App">
      <Header  />
      {
            <Switch>
               <Route path="/userdash">
                    <UserDash />
                </Route>
                <Route path="/create">
                    <Form />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
            </Switch>
        }
    </div>

    
  );
}

export default App;
