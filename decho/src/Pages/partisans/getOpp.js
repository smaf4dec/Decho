const seed = [{id: 1, twitterHandle: "BarackObama", lean: "left"},
{id: 2, twitterHandle: "politics_PR", lean: "left"},
{id: 3, twitterHandle: "DWStweets", lean: "left"},
{id: 4, twitterHandle: "People4Bernie", lean: "left"},
{id: 5, twitterHandle: "SenateDems", lean: "left"},
{id: 6, twitterHandle: "HouseDemocrats", lean: "left"},
{id: 7, twitterHandle: "SenatorReid", lean: "left"},
{id: 8, twitterHandle: "JoeBiden", lean: "left"},
{id: 9, twitterHandle: "TheDemocrats", lean: "left"},
{id: 10, twitterHandle: "NancyPelosi", lean: "left"},
{id: 11, twitterHandle: "donnabrazile", lean: "left"},
{id: 12, twitterHandle: "lankyghost", lean: "left"},
{id: 13, twitterHandle: "realDonaldTrump", lean: "right"},
{id: 14, twitterHandle: "benshapiro", lean: "right"},
{id: 15, twitterHandle: "MichelleMalkin", lean: "right"},
{id: 16, twitterHandle: "MichaelJohns", lean: "right"},
{id: 17, twitterHandle: "JohnBoehner", lean: "right"},
{id: 18, twitterHandle: "SarahPalinUSA", lean: "right"},
{id: 19, twitterHandle: "Heritage", lean: "right"},
{id: 20, twitterHandle: "RedState", lean: "right"},
{id: 21, twitterHandle: "GlennBeck", lean: "right"},
{id: 22, twitterHandle: "KarlRove", lean: "right"},
{id: 23, twitterHandle: "NewtGingrich", lean: "right"},
{id: 24, twitterHandle: "FredThompson", lean: "right"},
{id: 25, twitterHandle: "MittRomney", lean: "right"},
{id: 26, twitterHandle: "IngrahamAngle", lean: "right"},
{id: 27, twitterHandle: "JoeNBC", lean: "right"},
{id: 28, twitterHandle: "SeanHannity", lean: "right"},
{id: 29, twitterHandle: "theMRC", lean: "right"},
{id: 30, twitterHandle: "RNC", lean: "right"},
{id: 31, twitterHandle: "dickmorristweet", lean: "right"},
{id: 32, twitterHandle: "LoyaltoLiberty", lean: "right"},
{id: 33, twitterHandle: "HotAirBlog", lean: "right"},
{id: 34, twitterHandle: "USConservatives", lean: "right"}];

//gets collection of opposite people (obama might get Sean Hannity)
const getOpp = side =>{
    let res = seed.filter(partisan => partisan.lean !== side);
    return res;
}

//gets one opposite person (sarah Palin might get Joe biden)
const getOneOpp = (side) =>{
    let opps = getOpp(side);
    let oneOpp = opps[Math.floor(Math.random() * opps.length)]
    return oneOpp;
}

async function getOneOppFromServer(side) {
    // const {data} = await axios.get(`/${side}`);
    // let oneOpp = data[Math.floor(Math.random() * data.length)]
    // return oneOpp;

    return await new Promise(resolve => resolve(getOneOpp(side)));
}

// console.log(getOneOpp('left'))
module.exports = {getOpp, getOneOpp, getOneOppFromServer}