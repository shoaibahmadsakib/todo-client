import styled from '@emotion/styled';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteUser, getUsers } from '../Service/Api';


const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

// const THead = styled(TableRow)`
//     & > th {
//         font-size: 20px;
//         background: #000000;
//         color: #FFFFFF;
//     }
// `;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;
const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;







const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);


  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
}
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>

          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TRow key={user.id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>

            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
              <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>Delete</Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}

export default AllUser