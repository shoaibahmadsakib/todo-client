
import { useNavigate, useParams } from 'react-router-dom';
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { editUser, getUser } from '../Service/Api';
import styled from '@emotion/styled';


const initialValue = {
 name: "",
 phone:""
}
const Container = styled(FormGroup)`
      width: 50%;
      margin: 5% 0 0 25%;
      & > div {
          margin-top: 20px;
  `;


const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            
            <h2 className='text-xl-center'>Edit User</h2>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input  name='name'  onChange={(e) => onValueChange(e)} value={name} id="my-input" />
            </FormControl>


            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input  name='phone'  onChange={(e) => onValueChange(e)} value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser