import React, {useState, useEffect} from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import { useHistory, useParams } from "react-router";

const initialState = {
    id:'',
    name:'',
    location:'',
    date:'',
    time:'',
    foods:[]
}

const DeletedPotluckModal = (props) => {
    const [deletedPotluck, setDeletedPotluck] = useState(initialState);
    const {availablePotlucks, setAvailablePotlucks} = props;
    const { push } = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`https://potluckplanner7.herokuapp.com/api/potluckdashboard/${user_id}/potlucks/${potluck_id}`)
        .then(res => {
            setDeletedPotluck(res.data)
        })
        .catch(err => alert(err))
    },[])

    const handleDelete = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`https://potluckplanner7.herokuapp.com/api/potluckdashboard/${user_id}/potlucks/${potluck_id}`)
        .then(res => {
            setAvailablePotlucks(availablePotlucks.filter(item => item.class_id !== id))
            push('/dashboard')
        })
        .catch(err => alert(err))
    }

    return (
        <div className='modal'>
            <h2>Are you sure you want to delete {deletedPotluck.name}?</h2>
            <p className='errMsg'>This action is permanent, changes can not be reverted</p>
            <div>
                <button className='md-button' onClick={() => push('/dashboard')}>Back</button>
                <button id='delete' className='md-button' onClick={handleDelete} >Delete</button>
            </div>
        </div>
    )
}

export default DeletedPotluckModal;