import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from 'react-router'

const Logout = () => {     
    const {push} = useHistory()

    useEffect(()=> {
        axiosWithAuth()
            .post('https://potluckplanner7.herokuapp.com/api/user/logout')
            .then(res => {
              localStorage.removeItem("token");
              push('/login');
            }).catch(err=> {
                console.log(err);
            });
    }, []);

    return(<div></div>);
}

export default Logout;