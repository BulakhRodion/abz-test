import axios from "axios";

export async function getUsers(page) {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/users?page=${page}&count=6`);
    } catch (error) {
        console.error(error);
    }
}

export async function getPositions(page) {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/positions`);
    } catch (error) {
        console.error(error);
    }
}