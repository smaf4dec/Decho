const access = require('./access');
const Twitter = require('twitter');

const twit = new Twitter({
    consumer_key: access.key,
    consumer_secret: access.skey,
    access_token_key: access.at,
    access_token_secret: access.ats
  });

  const getweets = async id =>{ //will not work unless the access tokens are assigned
    twit.get('statuses/user_timeline',{count:20,tweet_mode:"extended",include_rts:'false', trim_user:'true',screen_name:'realDonaldTrump'}, function(error, tweets, response) {
        if(error) {console.log(error)} else{
            // console.log(tweets.body);  // The favorites.
            // response.body
            JSON.parse(response.body).forEach(tweet=>{
                console.log(tweet.full_text)
            })
        // console.log(JSON.parse(response.body));  // Raw response object.
        };
        
      });
}