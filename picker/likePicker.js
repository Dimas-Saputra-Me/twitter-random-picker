import getLike from "../routes/getLike.js";

getLike("tweet_id")
    .then((val) => {
      const winnerIndex = Math.floor(Math.random() * val.length);
      console.log("Like Picker");
      console.log(`${val.length} Participants. Winner: `);
      console.log(val[winnerIndex]);
    });
