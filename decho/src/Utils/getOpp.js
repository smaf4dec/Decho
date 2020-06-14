import axios from 'axios';

export const getOneOppFromServer = async(side) => {
    const {data} = await axios.get(`https://deco-db.herokuapp.com/users`);
    let oneOpp = data[Math.floor(Math.random() * data.length)]
    return oneOpp;
}
