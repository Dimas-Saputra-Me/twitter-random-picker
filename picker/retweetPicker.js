import getRetweet from "../routes/getRetweet.js";

getRetweet("tweet_id")
    .then((val) => {
      const winnerIndex = Math.floor(Math.random() * val.length);
      console.log("Retweet Picker");
      console.log(`${val.length} Participants. Winner: `);
      console.log(val[winnerIndex]);
    });
