
// import axios from 'axios';

// const URL = 'http://localhost:8000';

// export const addUser = async (data) =>{
//     try{
//         // console.log(data);
//        let response= await axios.post(`${URL}/add`, data);
//        return response;
//     }
//     catch(error){
//         console.log('Error while calling addUser api', error);
//     }
// }

// export const getUsers = async () =>{
//     try{
//        let response= await axios.get(`${URL}/getusers`);
//        return response.data;
//     }
//     catch(error){
//         console.log('Error while calling getUsers api', error);
//     }
// }

// export const setConversation = async (data)=>{
//     try{
//        await axios.post(`${URL}/conversation/add`, data);
       
//     }
//     catch(error){
//         console.log('Error while calling setConversation api', error);
//     }
// }

// export const getConversation = async (data)=>{
//     try{
//        let response= await axios.post(`${URL}/conversation/get`, data);
//        return response.data;
       
//     }
//     catch(error){
//         console.log('Error while calling getConversation api', error);
//     }
// }

// export const newMessage= async (data)=>{
//     try{
//         await axios.post(`${URL}/message/add`,data);
//     }
//     catch(error){
//         console.log('Error while calling newMessage api', error);
//     }
// }

// export const getMessages= async (id)=>{
//     try{
//         // console.log(id);
//         let response= await axios.get(`${URL}/message/get/${id}`);
//         return response.data;
//     }
//     catch(error){
//         console.log('Error while calling getMessage api', error);
//     }
// }


import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        console.log(data);
        let response = await axios.post(`${url}/add`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling addUser API ', error);
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data
    } catch (error) {
        console.log('Error while calling getUsers API ', error);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling setConversation API ', error);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    } catch (error) {
        console.log('Error while calling getMessages API ', error);
    }
}

export const newMessages = async (data) => {
    try {
        return await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}