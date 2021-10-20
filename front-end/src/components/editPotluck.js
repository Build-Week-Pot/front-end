import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialPotluck = {
  id:'',
  name:'',
  location:'',
  date:'',
  foods:[]
}

const EditForm = (props)=> {
  const [potluck, setPotluck] = useState(initialPotluck);
  const {handleEdit, handleEditCancel, editID} = props;

  const handleChange = (e)=> {
    setPotluck({
      ...potluck,
      [e.target.name]: e.target.value
    })
  }
  useEffect(() => {
    axiosWithAuth().get(``)
    .then(resp => {
      setPotluck(resp.data)
    })
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(potluck);
  }
  const handleCancel = (e) => {
    e.preventDefault();
    handleEditCancel
  }
}
