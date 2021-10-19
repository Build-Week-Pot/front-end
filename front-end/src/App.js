import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Form from './components/Form';




function App() {
  return (
    <div className="App">
      <Header  />
      {
            <Switch>
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
      <Footer />
    </div>

    
  );
}

export default App;
