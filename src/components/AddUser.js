import styled from '@emotion/styled';
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from "../Service/Api"


const initialValue = {
  name: '',
  phone: ''
}
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;





const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, phone } = user;

  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const addUserDetails = async () => {
    await addUser(user);
    // navigate('/all');
  }
  return (
    <Container>
      <h2 className='text-xl-center'>Add User</h2>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
      </FormControl>


      <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser