import axios from 'axios';
// const API = "http://localhost:3000/users"   // for local development
const API = "https://deco-db.herokuapp.com/users"

export const getOneOppFromServer = async(side) => {
    const {data} = await axios.get(API);
    let oneOpp = data[Math.floor(Math.random() * data.length)]
    return oneOpp;
}
