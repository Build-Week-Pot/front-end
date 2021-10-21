import React, {useEffect, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialPotluck = {
  id:'',
  name:'',
  location:'',
  date:'',
  time:'',
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

  return(<FormContainer onSubmit={handleSubmit}>
      <h3>Edit Potluck</h3>
      <div>
            <label>Location</label>
            <input value={potluck.location} id="location" name="location" onChange={handleChange}/>
        </div>
        <div>
            <label>Date</label>
            <input value={potluck.date} id="date" name="date" onChange={handleChange}/>
        </div>
        <div>
            <label>Time</label>
            <input value={potluck.time} id="time" name="time" onChange={handleChange}/>
        </div>
        <div>
            <label>Foods</label>
            <input value={potluck.foods} id="foods" name="foods" onChange={handleChange}/>
        </div>
        <Button id='editButton'>Edit Potluck</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </FormContainer>)
}

export default EditForm;
