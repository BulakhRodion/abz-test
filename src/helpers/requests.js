import axios from "axios";

let token = '';

export async function getUsers(page) {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/users?page=${page}&count=6`);
    } catch (error) {
        console.error(error);
    }
}

export async function getPositions() {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/positions`);
    } catch (error) {
        console.error(error);
    }
}

async function getToken() {
    try {
        return await axios.get(`${process.env.REACT_APP_API_URL}/token`);
    } catch (error) {
        console.error(error);
    }
}

getToken()
    .then(res => {
        token = res.data?.token;
    })
    .catch(err => {
        console.log(err);
    });

export async function sendUserData(values) {
    try {
        return await axios.post(`${process.env.REACT_APP_API_URL}/users`, values, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Token': token,
            },
        });
    } catch (error) {
        console.error(error);
    }
}