import { Link } from 'react-router-dom';



export default function Header(){
    return(
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" class='navbar-brand'><h1>Potluck Planners</h1></Link> 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/login" class="nav-link" >Login </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register"class="nav-link" >Register</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/create"class="nav-link" >Create Potluck</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/userdash"class="nav-link" >User Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/logout"class="nav-link" >Logout</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
        

    </div>
    )
}