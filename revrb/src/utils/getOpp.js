import axios from 'axios';
const API = "https://deco-db.herokuapp.com/users"

export const getOneOppFromServer = async() => {
    const {data} = await axios.get(API);
    let oneOpp = data[Math.floor(Math.random() * data.length)]
    return oneOpp;
}
