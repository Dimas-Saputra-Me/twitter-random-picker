import getReply from "../routes/getReply.js";

getReply("tweet_id")
    .then((val) => {
      const winnerIndex = Math.floor(Math.random() * val.length);
      console.log("Reply Picker");
      console.log(`${val.length} Participants. Winner: `);
      console.log(val[winnerIndex]);
    });
