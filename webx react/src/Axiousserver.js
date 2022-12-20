import axios from 'axios';

const BASE_URL = 'http://localhost:9800/';
const FEEDBACK_URL = 'http://localhost:9800/feedback';
const USER_URL = 'http://localhost:9800/Myacc';

export async function saveUser(user){
    return axios.post(BASE_URL,user)
}

export async function saveFeedback(feedback){
    return axios.post(FEEDBACK_URL,feedback)
}
export async function getFeedback(){
    return axios.get(FEEDBACK_URL)
}
export async function getUserFromServer(username,password){
    return axios.get(`${BASE_URL}/${username}/${password}`)
}

