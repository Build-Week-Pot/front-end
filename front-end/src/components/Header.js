import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserDashboard from './UserDashboard';


export default function Header(){
/**
 * <nav>
            <Link to="/"><h1>Potluck Planners</h1></Link> 
            <Link to="/login"><h1>Login</h1></Link> 
            <Link to="/register"><h1>Register</h1></Link> 
        </nav>
 */
    return(
    <div>
        <nav class="navbar navbar-expand navbar-light bg-light">
            <Link to="/" class='navbar-brand'><h1>Potluck Planners</h1></Link> 
            
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/login" class="nav-link" href="#">Login <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                    <Link to="/register"class="nav-link" href="#">Register</Link>
                </li>
            </ul>
        </nav>



        {
            <Switch>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/'>
                    <UserDashboard/>
                </Route>
            </Switch>
        }
    </div>
    )
}