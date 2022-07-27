import getQuoteTweet from "../routes/getQuoteTweet.js";

getQuoteTweet("tweet_id")
    .then((val) => {
      const winnerIndex = Math.floor(Math.random() * val.length);
      console.log("Quote Tweet Picker");
      console.log(`${val.length} Participants. Winner: `);
      console.log(val[winnerIndex]);
    });
