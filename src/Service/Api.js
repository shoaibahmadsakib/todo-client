
import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://tim-inukshuk-69924.herokuapp.com';

export const addUser = async (user) => {
    try {
        return await axios.post(`${usersUrl}/add`, user);
    } catch (error) {
        console.log("there was an error", error);
    }

}
export const getUsers = async (id) => {
    try {
        return await axios.get(`${usersUrl}/add`);
    } catch (error) {
        console.log("there was an error", error);
    }

}
export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}
export const getUser = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}
