/* eslint-disable no-unused-vars */
import * as fs from "fs";
import * as api from "../routes/routes.js";

// Get user By Username
// api.getUserByUsername("username")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => console.error(err));

// Get retweet
// api.getRetweet("tweet_id")
//     .then((res) => {
//       // Convert array of object to string
//       res = res.map((obj) => JSON.stringify(obj)).join("\n");
//       write(res);
//     }).catch((err) => console.error(err));

// Get quoute tweet
// api.getQuoteTweet("tweet_id")
//     .then((res) => {
//       // Convert array of object to string
//       res = res.map((obj) => JSON.stringify(obj)).join("\n");
//       write(res);
//     }).catch((err) => console.error(err));

// Get like
// api.getLike("tweet_id")
//     .then((res) => {
//       // Convert array of object to string
//       res = res.map((obj) => JSON.stringify(obj)).join("\n");
//       write(res);
//     }).catch((err) => console.error(err));

// Get following
// api.getFollowing("userid")
//     .then((res) => {
//       // Convert array of object to string
//       res = res.map((obj) => JSON.stringify(obj)).join("\n");
//       write(res);
//     }).catch((err) => console.error(err));

// Get reply
// api.getReply("tweet_id")
//     .then((res) => {
//       // Convert array of object to string
//       res = res.map((obj) => JSON.stringify(obj)).join("\n");
//       write(res);
//     }).catch((err) => console.error(err));


// ADDITIONAL FUNCTION
// Write in a file
function write(text) {
  fs.writeFile("./output.txt", text, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
}
