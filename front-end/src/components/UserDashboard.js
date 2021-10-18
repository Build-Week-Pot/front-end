import { Link, Route } from "react-router-dom";
import Form from "./Form";

export default function UserDashboard(){

    return(
    <div>
        <h2>UserDashboard</h2>
        <Link to="create"><button>Create Potluck</button></Link>


        <Route path="/create">
            <Form />
        </Route>
        
    </div>
    )
}
