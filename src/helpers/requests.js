import axios from "axios";

export async function getUsers(page) {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/users?page=${page}&count=6`);
    } catch (error) {
        console.error(error);
    }
}