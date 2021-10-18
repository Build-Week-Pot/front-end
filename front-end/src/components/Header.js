import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserDashboard from './UserDashboard';


export default function Header(){

    return(
    <div>
        <nav>
            <Link to="/"><h1>Potluck Planners</h1></Link> 
            <Link to="/login"><h1>Login</h1></Link> 
            <Link to="/register"><h1>Register</h1></Link> 
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